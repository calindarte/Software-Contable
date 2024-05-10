import { useState } from "react";

import GradienteAritmetico from "../components/GradienteAritmetico";
import CrecienteDecreciente from "../components/CrecienteDecreciente";
import GradienteGeometrico from "../components/GradienteGeometrico";

const Gradientes = () => {

  const [aritmetico, setAritmetico] = useState(false)
  const [creciente, setCreciente] = useState(false)
  const [geometrico, setGeometrico] = useState(false)
     
    
  return (
    <div className="bg-[#f5f5f5] m-20 rounded-2xl shadow-lg">
      <div className="flex flex-col p-12">
        <h2 className="text-center font-medium text-2xl">
          Calculadora de Gradientes
        </h2>
        <p className="mt-4 text-justify">
          Se conocen como <b>Series Variables o Gradientes</b>, los pagos que
          presentan un comportamiento creciente o decreciente de manera
          constante. También son llamados “Gradiente Aritmético” si la variación
          es periódica y lineal y ·Gradiente Geométrico” si la variación es
          periódica y porcentual. Algunos autores denominan estas operaciones
          como Anualidades crecientes o Anualidades Decrecientes.
        </p>
        <div className="py-4 flex flex-col gap-3">
          <span>
            <b>VP (Valor Presente):</b> Valor Presente del gradiente.
          </span>
          <span>
            <b>VF (Valor Futuro):</b> Valor Futuro del gradiente.
          </span>
          <span>
            <b>G :</b> Cantidad en que se incrementa o disminuye el pago
            periódico.
          </span>
          <span>
            <b>i :</b> Tasa de Interés.
          </span>
          <span>
            <b>n:</b> Número de períodos: diferencia entre el período que
            termina y el período donde está localizado su cero.
          </span>
        </div>

        <div className="flex justify-center gap-4 my-8">
          <button className={`bg-slate-200 p-4 font-medium  rounded-2xl shadow-lg hover:bg-slate-300 ${aritmetico && "ring-2 ring-sky-600"}`} onClick={()=> setAritmetico(!aritmetico)}>Gradiente Aritmético</button>
          <button className={`bg-slate-200 p-4 font-medium rounded-2xl shadow-lg hover:bg-slate-300 ${creciente && "ring-2 ring-sky-600"}`} onClick={()=> setCreciente(!creciente)}>Gradiente Aritmeticos Crecientes y Decrecientes</button>
          <button className={`bg-slate-200 p-4 font-medium rounded-2xl shadow-lg hover:bg-slate-300 ${geometrico && "ring-2 ring-sky-600"}`} onClick={()=> setGeometrico(!geometrico)}>Gradiente Geométrico</button>
          
        </div>
        
        {
          aritmetico && ( <GradienteAritmetico/>)
        }
        {
          creciente && (<CrecienteDecreciente/>) 

        }
        {
          geometrico && ( <GradienteGeometrico/>)
        }

       


    </div>
    </div>
  );
};

export default Gradientes;
