import "./App.css";

function App() {
  return (
    <>
      <h1>Bienvenido, disfruta de tu partido</h1>
      <div className="iframe-container">
        <iframe
          src="https://www.capofut.net/play/premier5.php"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default App;
