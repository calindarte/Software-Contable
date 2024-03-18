import React, { useState } from 'react';
import FORMULAS from '../images/FORMULAS.png';

const InteresCompuesto = () => {
  const [valorPresente, setValorPresente] = useState("");
  const [valorFuturo, setValorFuturo] = useState("");
  const [interes, setInteres] = useState("");
  const [anios, setAnios] = useState("");
  const [meses, setMeses] = useState("");
  const [dias, setDias] = useState("");
  const [frecuenciaPago, setFrecuenciaPago] = useState(12);
  const [resultVf, setResultVf] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "valorPresente":
        setValorPresente(value);
        break;
      case "valorFuturo":
        setValorFuturo(value);
        break;
      case "interes":
        setInteres(value);
        break;
      case "anios":
        setAnios(value);
        break;
      case "meses":
        setMeses(value);
        break;
      case "dias":
        setDias(value);
        break;
      case "frecuenciaPago":
        setFrecuenciaPago(parseInt(value));
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      if ((valorPresente || valorFuturo) && interes && (anios || meses || dias)) {
        const p = parseFloat(anios) + parseFloat(meses) / 12 + parseFloat(dias) / 365;

        if (valorPresente && interes && p) {
          const VF = calcularVF(parseFloat(valorPresente), parseFloat(interes), p, frecuenciaPago);
          setResultVf(VF);
          console.log("valorFuturo", VF);
        }

        setError(null);
      } else {
        setError("Por favor, complete todos los campos.");
      }
    } catch (error) {
      setError("Se produjo un error");
    }
  };

  const calcularVF = (capital, interes, tiempo, frecuenciaPago) => {
    // Implementación básica para calcular el valor futuro
    return capital * Math.pow(1 + interes / (100 * frecuenciaPago), tiempo * frecuenciaPago);
  };

  const truncateDecimal = (value) => {
    if (value === null) return "";
    return value.toFixed(2);
  };

  return (
    <div style={stylesContainerPadre}>
      <h1 style={styleTitulo}>ANUALIDADES</h1>
      <br />
      <p style={styleParrafo}>
        Una anualidad es un tipo de inversión o acuerdo financiero que implica una serie de pagos o depósitos regulares realizados a intervalos específicos durante un período de tiempo determinado.
      </p>
      <br />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <div style={ContenedorTex1}>
          <p style={{ textAlign: 'center' }}>¿Cómo puedo calcular?</p>
          <p>capital presente = capital futuro + tasa de interés + período</p>
          <p>capital futuro = capital presente + tasa de interés + período</p>
          <p>tasa de interés = capital presente + capital futuro + período</p>
          <p>período = capital presente + capital futuro + tasa de interés</p>
        </div>
        <div>
          <img style={{ height: 300, width: 300 }} src={FORMULAS} alt="FORMULAS" />
        </div>
      </div>

      <br />
      <form onSubmit={onSubmit}>
        <div style={styleContainerBotones}>
          <div style={StyleContainerGris}>
            <label>Capital Presente</label>
            <input
              type="number"
              name="valorPresente"
              value={valorPresente}
              onChange={handleInputChange}
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <br />
          <div style={StyleContainerGris}>
            <label>Capital Futuro:</label>
            <input
              type="number"
              name="valorFuturo"
              value={valorFuturo}
              onChange={handleInputChange}
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <br />
          <div style={StyleContainerGris}>
            <label>Tasa de Interés Anual (%):</label>
            <input
              type="number"
              name="interes"
              value={interes}
              onChange={handleInputChange}
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <br />
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Periodo:</label>
            <input
              type="number"
              name="anios"
              value={anios}
              onChange={handleInputChange}
              placeholder="Años"
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
            <input
              type="number"
              name="meses"
              value={meses}
              onChange={handleInputChange}
              placeholder="Meses"
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
            <input
              type="number"
              name="dias"
              value={dias}
              onChange={handleInputChange}
              placeholder="Días"
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <br />
          <div className="flex justify-center gap-8">
            <button style={StyleBtnCalcular} type="submit">
              Calcular
            </button>
            <button style={StyleBtnLimpiar} type="button" onClick={() => {
              setValorPresente("");
              setValorFuturo("");
              setInteres("");
              setAnios("");
              setMeses("");
              setDias("");
            }}>
              Limpiar
            </button>
          </div>
        </div>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {resultVf && <p>Valor Futuro: {resultVf}</p>}
      {/* Resto del código de JSX */}
    </div>
  );
};

const ContenedorTex1 = {
  padding: '20px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  fontWeight: 'bold',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  outline: '2px solid #ffff00',
};

const StyleBtnCalcular = {
  background: "#F1C40F",
  borderRadius: 30,
  width: 150,
  justifyContent: "center",
  left: 200,
};

const StyleBtnLimpiar = {
  background: "#2980B9",
  borderRadius: 30,
  width: 150,
  justifyContent: "center",
};

const stylesContainerPadre = {
  background: "#f5f5f5",
  margin: 20,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: "2px", // Cambié rounded a borderRadius
  boxShadow: "lg", // Puede que necesites ajustar esto según tus necesidades
};

const styleTitulo = {
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 20,
};

const styleParrafo = {
  textAlign: 'center',
  fontSize: 20,
};

const styleContainerBotones = {
  paddingTop: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  justifyContent: "center",
};

const StyleContainerGris = {
  backgroundColor: "#EAF2F8",
  padding: '1rem',
  display: 'flex',
  gap: '0.5rem',
  borderRadius: '0.5rem',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default InteresCompuesto;
