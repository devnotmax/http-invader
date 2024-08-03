import React from "react";
import "./Home.css"; // Asegúrate de tener estilos para esta página
import serverIlust from "../../../public/server-ilust.svg";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header"></header>
      <section className="home-intro">
        <div className="home-text">
          <h1>BIENVENIDO A HTTP INVADER</h1>
          <p>
            Tu herramienta para realizar consultas a APIs de manera sencilla y
            rápida.
          </p>
          <h2>¿Qué es esta aplicación?</h2>
          <p>
            Esta aplicación te permite realizar consultas a diferentes APIs
            utilizando parámetros personalizados. Simplemente ingresa la URL de
            la API y los parámetros necesarios para obtener los datos que
            necesitas.
          </p>
        </div>
        <div className="home-image">
          <img src="/server-ilust.svg" />
        </div>
      </section>
      <section className="home-features">
        <div className="home-image">
          <img src="/pair-code-ilust.svg" />
        </div>
        <div className="home-text">
          <h2>Características Principales</h2>
          <ul>
            <li>
              <i class="bx bxs-badge-check"></i>Consulta APIs con parámetros
              personalizados.
            </li>
            <li>
              <i class="bx bxs-badge-check"></i>Visualiza resultados en formato
              JSON.
            </li>
            <li>
              <i class="bx bxs-badge-check"></i>Maneja múltiples endpoints y
              parámetros.
            </li>
          </ul>
          <h2>Comienza Ahora</h2>
          <p>Explora y realiza tus primeras consultas. ¡Es fácil y rápido!</p>
          <button onClick={() => (window.location.href = "/query")} className="home-button">
            Hacer una Consulta
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
