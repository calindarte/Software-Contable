import { useState } from "react";
import imgGeometricoVF from "../images/geometricoVF.png";
import imgGeometricoVP from "../images/geometricoVP.png";
import Swal from "sweetalert2";


const GradienteGeometrico = () => {

  const [G, setG] = useState("");
  const [i, setI] = useState("");
  const [n, setN] = useState("");
  const [r, setR] = useState("");


  const [montoFinalGeometrico, setMontoFinalGeometrico] = useState("");
  const [valorActualGeometrico, setValorActualGeometrico] = useState("");

  const [frecuenciaCapitalizacion, setFrecuenciaCapitalizacion] = useState("anual");

  

  const calcularGradienteGeometrico = () => {
    const G_value = parseFloat(G);
    const i_value = parseFloat(i) / 100; // Convertir el porcentaje a decimal
    const n_value = parseFloat(n);
    const r_value = parseFloat(r) / 100;


// Determinar la frecuencia de capitalización
let capitalizacion = 1; // Por defecto, capitalización anual
if (frecuenciaCapitalizacion === "mensual") {
capitalizacion = 12;
} else if (frecuenciaCapitalizacion === "trimestral") {
capitalizacion = 4;
} 

    if(!isNaN(G_value) && !isNaN(i_value) && !isNaN(n_value) && !isNaN(r_value)) {
      // Calcular valor futuro del gradiente geométrico
      const VF_geometrico = G_value * (((Math.pow(1 + (i_value/capitalizacion), (n_value*capitalizacion))) - (Math.pow(1 + (r_value/capitalizacion), (n_value*capitalizacion)))) / ((i_value/capitalizacion) - (r_value/capitalizacion)));
      setMontoFinalGeometrico(VF_geometrico.toFixed(2));
  
      // Calcular valor presente del gradiente geométrico
      const VP_geometrico = G_value * (((Math.pow(1 + (i_value/capitalizacion), (n_value*capitalizacion))) - (Math.pow(1 + (r_value/capitalizacion), (n_value*capitalizacion)))) / ((i_value/capitalizacion) - (r_value/capitalizacion))) * (Math.pow(1 + (i_value/capitalizacion), -(n_value*capitalizacion)));
      setValorActualGeometrico(VP_geometrico.toFixed(2));
    }else{
      Swal.fire({
        title: "Error!",
        text: "No se han ingresado todos los campos.",
        icon: "error",
    });

    }

}


  const handleReset = () => {
    setG("");
    setI("");
    setN("");
    setR("");
    setMontoFinalGeometrico("");
    setValorActualGeometrico("");
  };

  return (
    <>
      <div className="flex flex-col items-center my-4">
        <span className="tracking-wider mb-2 font-medium">
          Gradiente Geométrico Formulas:
        </span>
        <div className="flex gap-4">
          <img src={imgGeometricoVF} alt="formula" className="rounded-md" />
          <img src={imgGeometricoVP} alt="formula" className="rounded-md" />
        </div>
      </div>
      <div className="py-8 flex flex-col gap-3">
        <div className="py-8 flex flex-col gap-3">
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>K (Cantidad en que se incrementa o disminuye el pago periódico):</label>
            <input
              type="number"
              value={G}
              onChange={(e) => setG(e.target.value)}
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Tasa de Interés (%):</label>
            <input
              type="number"
              value={i}
              onChange={(e) => setI(e.target.value)}
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Número de Períodos (n):</label>
            <input
              type="number"
              value={n}
              onChange={(e) => setN(e.target.value)}
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Razon (r):</label>
            <input
              type="number"
              value={r}
              onChange={(e) => setR(e.target.value)}
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
            <label>Valor Final (Gradiente Geométrico):</label>
            <input
              type="number"
              value={montoFinalGeometrico}
              readOnly
              className="bg-gray-100 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Valor Actual (Gradiente Geométrico):</label>
            <input
              type="number"
              value={valorActualGeometrico}
              readOnly
              className="bg-gray-100 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
        </div>
        </div>
        <div className="flex justify-center gap-8">
          <button
            onClick={() => calcularGradienteGeometrico()}
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
    </>
  );
};

export default GradienteGeometrico;
