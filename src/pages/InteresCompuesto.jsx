import { useState } from "react";

const InteresCompuesto = () => {
  const [capital, setCapital] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");
  const [tiempoAnios, setTiempoAnios] = useState("");
  const [tiempoMeses, setTiempoMeses] = useState("");
  const [tiempoDias, setTiempoDias] = useState("");
  const [frecuenciaCapitalizacion, setFrecuenciaCapitalizacion] = useState("anual");
  const [montoFinal, setMontoFinal] = useState("");

  const calcularInteres = () => {
    let VP = parseFloat(capital);
    let VF = parseFloat(montoFinal);
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

    // Calcular el monto total utilizando la fórmula de interés compuesto
    if (!isNaN(VP) && !isNaN(i) && !isNaN(t) && isNaN(VF)) {
       
        const montoTotal = VP * Math.pow(1 + (i / n), t * n);
    
        setMontoFinal(montoTotal.toFixed(2));
      
    }
     // Calcular el valor Presente utilizando la fórmula de interés compuesto
     if (isNaN(VP) && !isNaN(i) && !isNaN(t) && !isNaN(VF)) {
       
      const valorPresente = VF / Math.pow(1 + (i / n), t * n);
  
      setCapital(valorPresente.toFixed(2));
    
  }

    // Calcular la tasa de interés compuesto
    if (!isNaN(VP) && !isNaN(VF) && !isNaN(t) && isNaN(i)) {
      let interes = Math.pow(VF / VP, 1 / (t*n)) - 1;
      setTasaInteres((interes * 100).toFixed(2));
    }

    // Calcular el tiempo
    if (!isNaN(VP) && !isNaN(VF) && !isNaN(i) && isNaN(t)) {
        let t = (Math.log(VF / VP)) / (n * Math.log(1 + i / n));
        setTiempoAnios(Math.floor(t)); // Obtener la parte entera para los años
        // Calcular los meses y días restantes
        let mesesRestantes = Math.floor((t - Math.floor(t)) * 12);
        let diasRestantes = Math.floor(((t - Math.floor(t)) * 12 - mesesRestantes) * 30); // Se asume un mes de 30 días
        setTiempoMeses(mesesRestantes);
        setTiempoDias(diasRestantes);
      }
  };

  const handleReset = () => {
    setCapital("");
    setTasaInteres("");
    setTiempoAnios("");
    setTiempoMeses("");
    setTiempoDias("");
    setFrecuenciaCapitalizacion("anual");
    setMontoFinal("");
  };

  return (
    <div className="bg-[#f5f5f5] m-20 rounded-2xl shadow-lg">
      <div className="flex flex-col p-12">
        <h2 className="text-center font-medium text-2xl">
          Calculadora de Interés Compuesto
        </h2>
        <p className="mt-4 text-justify">
          Calculadora de <b>interés compuesto</b> diseñada para ayudar a los
          usuarios a determinar el monto total después de un período de tiempo
          dado, considerando el interés compuesto. Los usuarios pueden ingresar
          el capital inicial que desean invertir, la tasa de interés anual
          aplicable y el período de tiempo durante el cual desean calcular el
          monto final. El software realiza automáticamente los cálculos
          necesarios utilizando la fórmula de interés compuesto.
        </p>
        <div className="py-4 flex flex-col gap-3">
      
      <span>
        <b>VP (Valor Presente o Capital):</b> Es la cantidad de dinero inicial o
        principal que se invierte o presta.
      </span>
      <span><b>i (Tasa de Interés):</b> Representa la tasa de interés por período, generalmente expresada como un porcentaje.</span>
    <span> <b>t (Tiempo):</b> Es la duración del préstamo o la inversión, expresada en años, meses y/o días.</span>
    <span><b>n:</b> Es el número de veces que se capitaliza el interés por año.</span>
    <span><b>M (Monto Total):</b> Es el monto total acumulado al final del período de inversión.</span>


  </div>
  <div className="flex flex-col items-center my-4">
    <span className="tracking-wider mb-2 font-medium">Formulas:</span>
    <div className="flex justify-center">
<table>
<tbody >
<tr >
  <td className="border border-zinc-700 p-3" ><b>Interes Compuesto:</b></td>
  <td className="border border-zinc-700 p-3"><span>VP = VF / ( 1 + i) ^ n </span></td>
</tr>

<tr >
  <td className="border border-zinc-700 p-3"><b>Tasa de Interes: </b></td>
  <td className="border border-zinc-700 p-3"><span>i = (n √(VF / VP) - 1 )</span></td>
</tr>
<tr >
  <td className="border border-zinc-700 p-3"><b>Numero de Periodos: </b></td>
  <td className="border border-zinc-700 p-3"><span>n = (Log (VF/VP)) / (Log (1+i)) </span></td>
</tr>
<tr >
  <td className="border border-zinc-700 p-3"><b>Valor Futuro: </b></td>
  <td className="border border-zinc-700 p-3"><span>VF = ( VP ) * ( 1 + i ) ^ n </span></td>
</tr>
</tbody>
</table>
</div>
</div>

        <div className="py-8 flex flex-col gap-3">
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Capital:</label>
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
            <label>Tiempo:</label>
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
            <label>Monto Total:</label>
            <input
              type="number"
              value={montoFinal}
              onChange={(e) => setMontoFinal(e.target.value)}
              className="bg-gray-100  focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <button
            onClick={calcularInteres}
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

export default InteresCompuesto;
