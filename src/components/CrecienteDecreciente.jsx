import { useState } from "react";
import imgCreciente from "../images/creciente.png";
import imgDecreciente from "../images/decreciente.png";
import Swal from "sweetalert2";


const CrecienteDecreciente = () => {

  const [G, setG] = useState("");
  const [i, setI] = useState("");
  const [n, setN] = useState("");
  const [R, setR] = useState("");


  
  const [valorCreciente, setValorCreciente] = useState("")
  const [valorDecreciente, setValorDecreciente] = useState("")

  const [frecuenciaCapitalizacion, setFrecuenciaCapitalizacion] = useState("anual");

  const calcularGradientes = () => {
    const G_value = parseFloat(G);
    const R_value = parseFloat(R);
    const i_value = parseFloat(i) / 100; // Convertir el porcentaje a decimal
    const n_value = parseFloat(n);
    


// Determinar la frecuencia de capitalización
let capitalizacion = 1; // Por defecto, capitalización anual
if (frecuenciaCapitalizacion === "mensual") {
capitalizacion = 12;
} else if (frecuenciaCapitalizacion === "trimestral") {
capitalizacion = 4;
} 

    if (!isNaN(i_value) && !isNaN(n_value) && !isNaN(G_value) && !isNaN(R_value)) {   
      const Creciente_aritmetico = (R_value * (((Math.pow(1 + i_value, n_value)) - 1)/ i_value )) + (G_value * ((Math.pow(1 + (i_value / capitalizacion), (n_value*capitalizacion))) - 1 - (n_value*capitalizacion) * ((i_value/capitalizacion)) ) / (Math.pow((i_value/capitalizacion), 2)));
      setValorCreciente(Creciente_aritmetico.toFixed(2))

      const Decreciente_aritmetico = (R_value * (((Math.pow(1 + i_value, n_value)) - 1)/ i_value )) - (G_value * ((Math.pow(1 + (i_value / capitalizacion), (n_value*capitalizacion))) - 1 - (n_value*capitalizacion) * ((i_value/capitalizacion)) ) / (Math.pow((i_value/capitalizacion), 2)));
      setValorDecreciente(Decreciente_aritmetico.toFixed(2))
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
    setR("");
    setI("");
    setN("");
    setValorCreciente("");
    setValorDecreciente("");
  };

  return (
    <>
      <div className="flex flex-col items-center my-4">
        <span className="tracking-wider mb-2 font-medium">
          Gradiente Aritmeticos Crecientes y Decrecientes Formulas:
        </span>
        <div className="flex flex-col gap-4">
          <img src={imgCreciente} alt="formula" className="rounded-md" />
          <img src={imgDecreciente} alt="formula" className="rounded-md" />
        </div>
      </div>

      <div className="py-8 flex justify-center gap-14">
        
      <div className="py-8 flex flex-col gap-3 w-full">
          <span className="text-center font-medium"> VF Anualidad Vencida</span>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>
              R :
            </label>
            <input
              type="number"
              value={R}
              onChange={(e) => setR(e.target.value)}
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
          
        </div>
        <div className="py-8 flex flex-col gap-3 w-full">
          <span className="text-center font-medium"> VF Gradiente Aritmético</span>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>
              G :
            </label>
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
          
          
        </div>
      </div>
          <div className="flex flex-col gap-4">
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Valor Creciente Aritmético:</label>
            <input
              type="number"
              value={valorCreciente}
              readOnly
              className="bg-gray-100 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Valor Decreciente Aritmético:</label>
            <input
              type="number"
              value={valorDecreciente}
              readOnly
              className="bg-gray-100 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />

          </div>
          </div>
          
      
      <div className="flex justify-center mt-8 gap-8">
        <button
          onClick={() => calcularGradientes()}
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

export default CrecienteDecreciente;
