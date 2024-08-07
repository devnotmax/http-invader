import React from "react";
import "../../assets/roots.css";
import "./FetchPT.css";

const FetchPT = () => {
  const apiUrl = React.useRef(null);
  const textarea_input = React.useRef(null);

  const getFuntion = () => {
    const apiUrlValue = apiUrl.current.value;
    fetch(apiUrlValue)
      .then((res) => res.json())
      .then((dataJson) => {
        console.log(dataJson);
        document.querySelector("#textarea_output").value = JSON.stringify(
          dataJson,
          null,
          2
        );
      })
      .catch((err) => console.log(err));
  };

  const sendData = (parameterMethod) => {
    const apiUrlValue = apiUrl.current.value;
    const textarea_inputValue = textarea_input.current.value;
    fetch(apiUrlValue, {
      method: parameterMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: textarea_inputValue,
    })
      .then((res) => res.json())
      .then((dataJson) => {
        console.log(dataJson);
        document.querySelector("#textarea_output").value = JSON.stringify(
          dataJson,
          null,
          2
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="fetchContainer">
      <form className="fetchForm">
        <input
          type="text"
          id="apiUrl"
          placeholder="apiUrl"
          ref={apiUrl}
          className="fetchInput"
        />
        <div className="buttonGroup">
          <button type="button" className="fetchButton" onClick={getFuntion}>
            GET
          </button>
          <button
            type="button"
            className="fetchButton"
            onClick={() => sendData("post")}
          >
            POST
          </button>
          <button
            type="button"
            className="fetchButton"
            onClick={() => sendData("put")}
          >
            PUT
          </button>
          <button
            type="button"
            className="fetchButton"
            onClick={() => sendData("delete")}
          >
            DELETE
          </button>
        </div>
      </form>

      <div className="container">
        <textarea
          id="textarea_input"
          rows="10"
          placeholder="Request Payload"
          ref={textarea_input}
          className="fetchTextarea"
        ></textarea>
        <textarea
          id="textarea_output"
          rows="10"
          placeholder="Response Output"
          className="fetchTextarea"
        ></textarea>
      </div>
    </div>
  );
};

export default FetchPT;
