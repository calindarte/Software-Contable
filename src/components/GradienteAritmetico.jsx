import { useState } from "react";
import imgAritmeticoVF from "../images/aritmeticoVF.png"
import imgAritmeticoVP from "../images/aritmeticoVP.png"
import Swal from "sweetalert2";


const GradienteAritmetico = () => {
    const [G, setG] = useState("");
    const [i, setI] = useState("");
    const [n, setN] = useState("");

    const [frecuenciaCapitalizacion, setFrecuenciaCapitalizacion] = useState("anual");
    const [montoFinalAritmetico, setMontoFinalAritmetico] = useState("");
    const [valorActualAritmetico, setValorActualAritmetico] = useState("");

    
    const calcularGradienteAritmetico = () => {
        const G_value = parseFloat(G);
        const i_value = parseFloat(i) / 100; // Convertir el porcentaje a decimal
        const n_value = parseFloat(n);

    
  // Determinar la frecuencia de capitalización
  let capitalizacion = 1; // Por defecto, capitalización anual
  if (frecuenciaCapitalizacion === "mensual") {
    capitalizacion = 12;
  } else if (frecuenciaCapitalizacion === "trimestral") {
    capitalizacion = 4;
  } 
    
        if (!isNaN(i_value) && !isNaN(n_value) && !isNaN(G_value)) {
          // Calcular valor futuro del gradiente aritmético
          const VF_aritmetico = G_value * ((Math.pow(1 + (i_value / capitalizacion), (n_value*capitalizacion))) - 1 - (n_value*capitalizacion) * ((i_value/capitalizacion)) ) / (Math.pow((i_value/capitalizacion), 2));
          setMontoFinalAritmetico(VF_aritmetico.toFixed(2));
      
          // Calcular valor presente del gradiente aritmético
          const VP_aritmetico = G_value * (((Math.pow(1 + (i_value / capitalizacion), (n_value * capitalizacion))) - 1 -(n_value*capitalizacion) * ((i_value/capitalizacion))) / (Math.pow((i_value/capitalizacion ), 2) * (Math.pow(1 + (i_value/capitalizacion), (n_value * capitalizacion)))));
          setValorActualAritmetico(VP_aritmetico.toFixed(2));   
          
       
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
        setMontoFinalAritmetico("");
        setValorActualAritmetico("");
      };

  return (
    <>
    
    <div className="flex flex-col items-center my-4">
    <span className="tracking-wider mb-2 font-medium">
     Gradiente Aritmético Formulas:
   </span>
   <div className="flex gap-4">
     <img src={imgAritmeticoVF} alt="formula" className="rounded-md"/>
     <img src={imgAritmeticoVP} alt="formula" className="rounded-md"/>
   </div>
   </div>
   <div className="py-8 flex flex-col gap-3">
        <div className="py-8 flex flex-col gap-3">
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>G (Cantidad en que se incrementa o disminuye el pago periódico):</label>
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
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Valor Final (Gradiente Aritmético):</label>
            <input
              type="number"
              value={montoFinalAritmetico}
              readOnly
              className="bg-gray-100 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Valor Actual (Gradiente Aritmético):</label>
            <input
              type="number"
              value={valorActualAritmetico}
              readOnly
              className="bg-gray-100 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          
        </div>
        </div>
        <div className="flex justify-center gap-8">
          <button
            onClick={() => calcularGradienteAritmetico()}
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
  )
}

export default GradienteAritmetico
