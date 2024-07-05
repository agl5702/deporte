import "./App.css";
import ExternalScript from "./ExternalScript";
function App() {
  return (
    <>
      <h1>Bienvenido, disfruta de tu partido</h1>
      <div className="iframe-container">
        <iframe
          src="https://www.capofut.net/play/premier4.php"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <ExternalScript />
      </div>
      <div>
        <footer>
          <p>
            &copy; 2024 Ver Partidos en Vivo. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
