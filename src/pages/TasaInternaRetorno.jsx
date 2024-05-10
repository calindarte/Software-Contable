import { useState } from "react";
import ImgTIR from "../images/FormulaTIR .png";
import Swal from "sweetalert2";


const TasaInternaRetorno = () => {
  const [flujosEfectivo, setFlujosEfectivo] = useState([]);
  const [tasaInicial, setTasaInicial] = useState(0.1); // Suposición inicial de la tasa de interés
  const [tir, setTIR] = useState(null);

  const calcularTIR = () => {
    // Verificar que haya al menos un flujo de efectivo ingresado
    if (flujosEfectivo.length === 0) {
      Swal.fire({
        title: "Error!",
        text: "No se han ingresado flujos de efectivo.",
        icon: "error",
    });
      return;
    }

    // Asegurar que el primer flujo de efectivo sea negativo (inversión inicial)
    if (flujosEfectivo[0] >= 0) {
      Swal.fire({
        title: "Error!",
        text: "El primer flujo de efectivo debe ser una inversión negativa.",
        icon: "error",
    });
      return;
    }
    const calcularVPN = (tasaInteres) => {
      return flujosEfectivoDecimal.reduce((vpn, flujo, indice) => {
        return vpn + flujo / Math.pow(1 + tasaInteres, indice);
      }, 0);
    };

   

    // Convertir los flujos de efectivo a valores decimales
    const flujosEfectivoDecimal = flujosEfectivo.map((flujo) =>
      parseFloat(flujo)
    );

    

    // Implementar el método de la TIR utilizando el método de Newton-Raphson
    const calcularTIRNewtonRaphson = () => {
      const tolerancia = 0.0001; // Tolerancia para la convergencia
      let tasaActual = tasaInicial;
      let contador = 0;

      while (true) {
        const vpn = calcularVPN(tasaActual);
        const derivada = flujosEfectivoDecimal.reduce(
          (derivada, flujo, indice) => {
            return (
              derivada - (flujo * indice) / Math.pow(1 + tasaActual, indice + 1)
            );
          },
          0
        );

        const nuevaTasa = tasaActual - vpn / derivada;

        if (Math.abs(nuevaTasa - tasaActual) < tolerancia || contador > 1000) {
          // Si la diferencia entre las tasas es menor que la tolerancia o se supera el límite de iteraciones, salir del bucle
          break;
        }

        tasaActual = nuevaTasa;
        contador++;
      }

      return tasaActual;
    };

    // Calcular la TIR
    const tirCalculada = calcularTIRNewtonRaphson();
    setTIR(parseFloat((tirCalculada * 100).toFixed(2)));
  };

  const handleReset = () => {
    setFlujosEfectivo([]);
    
    setTasaInicial(0.1);
    setTIR("");
  };

  return (
    <div className="bg-[#f5f5f5] m-20 rounded-2xl shadow-lg">
      <div className="flex flex-col p-12">
        <h2 className="text-center font-medium text-2xl">
          Calculadora de La Tasa de Interna de Retorno (TIR)
        </h2>
        <p className="mt-4 text-justify">
          Calculadora de <b>Tasa Interna de Retorno (TIR)</b> diseñada para
          ayudar a los usuarios a evaluar la rentabilidad de sus inversiones o
          proyectos. El objetivo principal es proporcionar una herramienta fácil
          de usar para calcular rápidamente la TIR sin la necesidad de realizar
          cálculos manuales complejos. Los usuarios pueden ingresar los flujos
          de efectivo esperados a lo largo de la vida útil del proyecto,
          incluyendo los costos iniciales de inversión y los ingresos futuros.
          El software acepta una variedad de períodos de tiempo, ya sea en años,
          meses o días, lo que proporciona flexibilidad en los cálculos. Una vez
          que se ingresan estos datos, el software realiza automáticamente los
          cálculos necesarios para determinar la TIR, que es la tasa de
          rendimiento que iguala el valor presente de los flujos de efectivo
          entrantes y salientes del proyecto. Esto permite a los usuarios tomar
          decisiones informadas sobre la viabilidad financiera de sus
          inversiones.
        </p>
        <div className="py-4 flex flex-col gap-3">
          <span>
            <b>Flujos de efectivo:</b> Son los ingresos y egresos asociados con
            el proyecto o inversión a lo largo de su vida útil. Incluyen el
            capital inicial invertido (flujo de efectivo negativo) y los
            ingresos futuros generados por el proyecto (flujos de efectivo
            positivos).
          </span>
          <span>
            <b>Periodo de tiempo:</b> Es el período durante el cual se realizan
            los flujos de efectivo. Puede ser expresado en años, meses o días,
            dependiendo de la precisión necesaria para el cálculo.
          </span>
          <span>
            <b>Valor presente:</b> Es el valor actual de los flujos de efectivo
            futuros, calculado utilizando una tasa de descuento. En el contexto
            de la TIR, este valor debe ser igual a cero, ya que la TIR es la
            tasa que hace que el valor presente neto de los flujos de efectivo
            sea cero.
          </span>
          <span>
            <b>Tasa de Interes (%):</b> Es la tasa de rendimiento que iguala el
            valor presente de los flujos de efectivo entrantes y salientes del
            proyecto. Representa la tasa de interés a la cual el valor presente
            de los flujos de efectivo generados por la inversión iguala su costo
            inicial o valor presente neto cero.
          </span>
        </div>

        <div className="flex flex-col items-center my-4">
          <span className="tracking-wider mb-2 font-medium">Formulas:</span>
          <div className="flex">
            <img src={ImgTIR} alt="formula" />
          </div>
        </div>

        <div className="py-8 flex flex-col gap-3">
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Inversión inicial:</label>
            <input
              type="number"
              onChange={(e) =>
                setFlujosEfectivo([
                  parseFloat(e.target.value),
                  ...flujosEfectivo.slice(1),
                ])
                
              }
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"

            />
          </div>
          <div className="bg-slate-200 p-4 flex flex-wrap gap-4 rounded-md shadow-md">
            {flujosEfectivo.map((flujo, index) => (
              <input
                key={index}
                type="number"
                value={flujo}
                onChange={(e) => {
                  const nuevosFlujos = [...flujosEfectivo];
                  nuevosFlujos[index] = parseFloat(e.target.value);
                  setFlujosEfectivo(nuevosFlujos);
                }}
                className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"

              />
            ))}
            <button onClick={() => setFlujosEfectivo([...flujosEfectivo, 0])} className="rounded-md bg-blue-300 px-4 ">
              Agregar Flujo
            </button>
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Tasa de Interés (%):</label>
            <input
              type="number"
              value={tasaInicial}
              onChange={(e) => setTasaInicial(parseFloat(e.target.value))}
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>

          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>TIR (%):</label>
            <input
              type="number"
              value={tir}
              readOnly
              className="bg-gray-100 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <button
            onClick={calcularTIR}
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

export default TasaInternaRetorno;
