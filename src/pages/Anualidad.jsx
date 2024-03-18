import { useState } from "react";

const Anualidad = () => {
  const [capital, setCapital] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");
  const [tiempoAnios, setTiempoAnios] = useState("");
  const [tiempoMeses, setTiempoMeses] = useState("");
  const [tiempoDias, setTiempoDias] = useState("");
  const [frecuenciaCapitalizacion, setFrecuenciaCapitalizacion] =
    useState("anual");
  const [montoFinal, setMontoFinal] = useState("");
  const [valorActual, setValorActual] = useState("")


  const calcularAnualidad = () => {

  

    let VP = parseFloat(capital);
    let i = parseFloat(tasaInteres) / 100; // Convertir el porcentaje a decimal

    // Calcular tiempo total en años
    let t =
      parseFloat(tiempoAnios) +
      parseFloat(tiempoMeses) / 12 +
      parseFloat(tiempoDias) / 365;

    // Verificar si solo se ingresó el campo de años
    if (tiempoAnios && !tiempoMeses && !tiempoDias) {
      t = parseFloat(tiempoAnios);
    }
    // Verificar si solo se ingresó el campo de meses
    if (tiempoMeses && !tiempoAnios && !tiempoDias) {
      t = parseFloat(tiempoMeses) / 12; // Convertir meses a años
    }
    // Verificar si solo se ingresó el campo de días
    if (tiempoDias && !tiempoAnios && !tiempoMeses) {
      t = parseFloat(tiempoDias) / 365; // Convertir días a años
    }

  

    // Determinar la frecuencia de capitalización
    let n = 1; // Por defecto, capitalización anual
    if (frecuenciaCapitalizacion === "mensual") {
      n = 12;
    } else if (frecuenciaCapitalizacion === "trimestral") {
      n = 4;
    } // Puedes agregar más opciones según sea necesario

  
    // Calcular el valor futuro utilizando la fórmula de anualidad
      const VF = VP * ((Math.pow(1 + (i / n), (t * n)) - 1) / (i / n));
  
      // Mostrar el valor futuro con dos decimales
      setMontoFinal(VF.toFixed(2));   

    
    // Calcular el valor Actual utilizando la fórmula de anualidad

      const VA = VP * ((1 - Math.pow(1 + (i/n), (-t * n))) / (i/n));
      setValorActual(VA.toFixed(2));

    
    



  };

  const handleReset = () => {
    setCapital("");
    setTasaInteres("");
    setTiempoAnios("");
    setTiempoMeses("");
    setTiempoDias("");
    setFrecuenciaCapitalizacion("anual");
    setMontoFinal("");
    setValorActual("")
  };

  return (
    <div className="bg-[#f5f5f5] m-20 rounded-2xl shadow-lg">
      <div className="flex flex-col p-12">
        <h2 className="text-center font-medium text-2xl">
          Calculadora de Anualidad
        </h2>
        <p className="mt-4 text-justify">
          Calculadora de <b>Anualidad</b> diseñada para ayudar a los usuarios a
          determinar el valor presente de una anualidad, considerando el interés
          compuesto. Los usuarios pueden ingresar el capital inicial que desean
          invertir, la tasa de interés anual aplicable y el período de tiempo
          durante el cual desean calcular el valor presente de la anualidad. El
          software realiza automáticamente los cálculos necesarios utilizando la
          fórmula de anualidad.
        </p>
        <div className="py-4 flex flex-col gap-3">
          <span>
            <b>VA (Valor Actual o Presente):</b> Valor Actual o Presente de la anualidad.
          </span>
          <span>
            <b>VF (Valor Final):</b> Es el monto de la Anualidad.
          </span>
          <span>
            <b>i (Tasa de Interés):</b> Representa la tasa de la Anualidad.
          </span>
          <span>
            <b>n:</b> Número de periodos de capitalización o de pago de la anualidad
          </span>
          
        </div>
        <div className="flex flex-col items-center my-4">
          <span className="tracking-wider mb-2 font-medium">Formulas:</span>
          <div className="flex justify-center">
            <table>
              <tbody>
                <tr>
                  <td className="border border-zinc-700 p-3">
                    <b>Valor Final:</b>
                  </td>
                  <td className="border border-zinc-700 p-3">
                    <span>VF = (A) * [(( 1 + i) ^ n - 1) / i]</span>
                  </td>
                </tr>

                <tr>
                  <td className="border border-zinc-700 p-3">
                    <b>Valor Actual </b>
                  </td>
                  <td className="border border-zinc-700 p-3">
                    <span>VA = (A) * [(1 - ( 1 + i ) ^ - n) / i]</span>
                  </td>
                </tr>
             
              </tbody>
            </table>
          </div>
        </div>

        <div className="py-8 flex flex-col gap-3">
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Anualidad:</label>
            <input
              type="number"
              value={capital}
              onChange={(e) => setCapital(e.target.value)}
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Tasa de Interés (%):</label>
            <input
              type="number"
              value={tasaInteres}
              onChange={(e) => setTasaInteres(e.target.value)}
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Numero de Periodos (n):</label>
            <input
              type="number"
              value={tiempoAnios}
              onChange={(e) => setTiempoAnios(e.target.value)}
              placeholder="Años"
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
            <input
              type="number"
              value={tiempoMeses}
              onChange={(e) => setTiempoMeses(e.target.value)}
              placeholder="Meses"
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
            <input
              type="number"
              value={tiempoDias}
              onChange={(e) => setTiempoDias(e.target.value)}
              placeholder="Días"
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Frecuencia de Capitalización:</label>
            <select
              value={frecuenciaCapitalizacion}
              onChange={(e) => setFrecuenciaCapitalizacion(e.target.value)}
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md px-2"
            >
              <option value="anual">Anual</option>
              <option value="mensual">Mensual</option>
              <option value="trimestral">Trimestral</option>
              {/* Puedes agregar más opciones según sea necesario */}
            </select>
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Valor Final</label>
            <input
              type="number"
              value={montoFinal}
              onChange={(e) => setMontoFinal(e.target.value)}
              className="bg-gray-100  focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Valor Actual</label>
            <input
              type="number"
              value={valorActual}
              onChange={(e) => setValorActual(e.target.value)}
              className="bg-gray-100  focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <button
            onClick={calcularAnualidad}
            className="bg-blue-300 px-6 py-2 rounded-full hover:bg-blue-500 shadow-md"
          >
            Calcular
          </button>
          <button
            onClick={handleReset}
            className="bg-amber-500 px-6 py-2 rounded-full hover:bg-amber-600 shadow-md"
          >
            Resetear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Anualidad;
