import { useState } from "react";
import "./App.css";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100px", // Ajustable según tu necesidad
};

const spinnerStyle = {
  width: "40px",
  height: "40px",
  border: "4px solid rgba(0, 0, 0, 0.1)",
  borderLeftColor: "#3498db", // Color del giro
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

function App() {
  const [countRequests, setCountRequests] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    setLoading(true);
    setCountRequests((count) => count + 1);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Consumo de APIs con React 🚀</h1>
      <div
        style={{
          fontSize: "2rem",
          lineHeight: "10px",
          margin: "1em 0",
          background: "#ffffff2f",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "3px 3px 10px #53535386",
        }}
      >
        <p>Total de peticiones realizadas</p>
        <p style={{ fontSize: "3rem", fontWeight: "900" }}>
          {countRequests} peticiones
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button
          style={{ display: "block" }}
          disabled={loading}
          onClick={() =>
            fetchData("https://jsonplaceholder.typicode.com/posts/1")
          }
        >
          Obtener Post
        </button>

        <button
          style={{ display: "block" }}
          disabled={loading}
          onClick={() =>
            fetchData("https://official-joke-api.appspot.com/random_joke")
          }
        >
          Obtener Chiste
        </button>

        <button
          style={{ display: "block" }}
          disabled={loading}
          onClick={() =>
            fetchData("https://api.thedogapi.com/v1/images/search")
          }
        >
          Obtener Imagen de Perro
        </button>

        <button
          style={{ display: "block" }}
          disabled={loading}
          onClick={() => fetchData("https://pokeapi.co/api/v2/pokemon/pikachu")}
        >
          Obtener Pikachu
        </button>
      </div>

      {loading && (
        <div style={containerStyle}>
          <style>
            {`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}
          </style>
          <div style={spinnerStyle}></div>
        </div>
      )}

      <div style={{ marginTop: "20px", overflowX: "auto", maxWidth: "80vw" }}>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </div>
  );
}

export default App;
