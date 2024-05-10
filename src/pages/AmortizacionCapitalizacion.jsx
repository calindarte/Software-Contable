import { useState } from "react";
import imgSistemaFrances from "../images/sistemaFrances.png";
import imgSistemaAleman from "../images/sistemaAleman.png";
import imgSistemaAmericano from "../images/sistemaAmericano.png";

import imgCapitalizacionSimple from "../images/capitalizacionSimple.png";
import imgCapitalizacionCompuesta from "../images/capitalizacionCompuesta.png";
import Swal from "sweetalert2";

const AmortizacionCapitalizacion = () => {
  const [montoInicial, setMontoInicial] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");
  const [plazo, setPlazo] = useState("");
  const [frecuenciaCapitalizacion, setFrecuenciaCapitalizacion] =
    useState("anual");

  const [cuotaFrances, setCuotaFrances] = useState("");
  const [cuotaAleman, setCuotaAleman] = useState("");
  const [cuotaAmericano, setCuotaAmericano] = useState("");

  const [capitalizacionSimple, setCapitalizacionSimple] = useState("");
  const [capitalizacionCompuesta, setCapitalizacionCompuesta] = useState("");

  const calcularAmortizacionYCapitalizacion = () => {
    const monto = parseFloat(montoInicial);
    const tasa = parseFloat(tasaInteres) / 100; // Convertir el porcentaje a decimal
    const periodo = parseFloat(plazo);

    let capitalizacion = 1;
    if (frecuenciaCapitalizacion === "mensual") {
      capitalizacion = 12;
    } else if (frecuenciaCapitalizacion === "trimestral") {
      capitalizacion = 4;
    }

    if (!isNaN(monto) && !isNaN(tasa) && !isNaN(periodo)) {

      // Método de Amortización Frances
      const cuotaFrances = (monto * (tasa / capitalizacion) * (Math.pow(1 + (tasa / capitalizacion), (periodo * capitalizacion)))) / ((Math.pow(1 + (tasa / capitalizacion), (periodo * capitalizacion))) - 1);
      const montoFinalFrancesCalculado = cuotaFrances * (periodo*capitalizacion);
      setCuotaFrances(montoFinalFrancesCalculado.toFixed(2));

      // Método de Amortización Alemán
      const amortizacion = monto / (periodo*capitalizacion);
      let montoFinalAlemanCalculado = 0;
      for (let i = 0; i < (periodo*capitalizacion); i++) {
        const interes = (monto - i * amortizacion) * (tasa/capitalizacion);
        montoFinalAlemanCalculado += amortizacion + interes;
      }
      setCuotaAleman(montoFinalAlemanCalculado.toFixed(2));

      // Método de Amortización Americano

      const cuotaAmericano = monto * (1 + (tasa/capitalizacion) * (periodo*capitalizacion));
      setCuotaAmericano(cuotaAmericano.toFixed(2));

      // Capitalización Simple
      const montoFinalSimpleCalculado = monto + monto * (tasa/capitalizacion) * (periodo*capitalizacion);
      setCapitalizacionSimple(montoFinalSimpleCalculado.toFixed(2));

      // Capitalización Compuesta
      const montoFinalCompuestoCalculado = monto * Math.pow(1 + (tasa/capitalizacion), (periodo*capitalizacion));
      setCapitalizacionCompuesta(montoFinalCompuestoCalculado.toFixed(2));
    }else{
      Swal.fire({
        title: "Error!",
        text: "No se han ingresado todos los campos.",
        icon: "error",
    });


    }
  };

  const handleReset = () => {
    setMontoInicial("");
    setTasaInteres("");
    setPlazo("");
    setCuotaFrances("");
    setCuotaAleman("");
    setCuotaAmericano("");
    setCapitalizacionSimple("");
    setCapitalizacionCompuesta("");
  };

  return (
    <div className="bg-[#f5f5f5] m-20 rounded-2xl shadow-lg">
      <div className="flex flex-col p-12">
        <h2 className="text-center font-medium text-2xl">
          Calculadora de Amortización y Capitalización
        </h2>
        <p className="mt-4 text-justify">
          Un sistema de <b>amortización</b> es un método mediante el cual un
          capital prestado es reembolsado a lo largo del tiempo a través de una
          serie de pagos o cuotas periódicas. Estas cuotas periódicas, que
          pueden variar en cantidad y frecuencia según el método de amortización
          utilizado, constituyen una renta que se utiliza para saldar el
          préstamo. El objetivo principal de un sistema de amortización es
          asegurar que el valor actual de todas las cuotas sea igual al monto
          total del préstamo otorgado. Esto garantiza que el prestamista reciba
          de vuelta el capital prestado, más los intereses correspondientes, de
          manera gradual y predecible a lo largo del tiempo.
        </p>
        <div className="flex flex-col gap-9 mt-7">
          <span>
            Los sistemas de amortización más usuales son los siguientes:
          </span>
          <div className="flex flex-col gap-8">
            <span>
              <b>Sistema de Amortización Francés:</b> La cuota periódica se
              calcula utilizando la fórmula de amortización de préstamos
            </span>
            <div className="mx-auto">
              <img src={imgSistemaFrances} alt="formula" />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <span>
              <b>Sistema de Amortización Alemán:</b> la cuota periódica es
              constante y se calcula dividiendo el monto del préstamo entre el
              número de periodos. No se considera el interés compuesto
            </span>
            <div className="mx-auto">
              <img src={imgSistemaAleman} alt="formula" />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <span>
              <b>Sistema de Amortización Americano:</b> Solo se pagan los
              intereses durante el plazo del préstamo y el monto principal se
              paga al final del período.
            </span>
            <div className="mx-auto">
              <img src={imgSistemaAmericano} alt="formula" />
            </div>
          </div>
          <p className="mt-4 text-justify">
            Un sistema de <b>capitalización</b> es una forma de calcular cómo
            crece un capital inicial a lo largo del tiempo debido a los
            intereses. Puede ser simple o compuesto. En el primero, los
            intereses se calculan solo sobre el capital original, mientras que
            en el segundo, los intereses ganados se añaden al capital original,
            generando más intereses en el futuro. El objetivo es determinar el
            valor futuro de una inversión inicial considerando la tasa de
            interés y el tiempo. Esto ayuda a los inversores a entender cuánto
            podría valer su inversión en el futuro y a tomar decisiones
            financieras informadas.
          </p>
          <div className="flex flex-col gap-8">
            <span>
              <b>Capitalización Simple:</b> En la capitalización simple, los
              intereses se calculan solo sobre el capital original durante cada
              período. La fórmula para calcular el monto final del préstamo con
              capitalización simple es:
            </span>
            <div className="mx-auto">
              <img src={imgCapitalizacionSimple} alt="formula" />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <span>
              <b>Capitalización Compuesta:</b> En la capitalización compuesta,
              los intereses se calculan sobre el capital original y sobre los
              intereses acumulados de períodos anteriores. La fórmula para
              calcular el monto final del préstamo con capitalización compuesta
              es:
            </span>
            <div className="mx-auto">
              <img src={imgCapitalizacionCompuesta} alt="formula" />
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col gap-3">
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Monto:</label>
            <input
              type="number"
              value={montoInicial}
              onChange={(e) => setMontoInicial(e.target.value)}
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
            <label>Plazo (n):</label>
            <input
              type="number"
              value={plazo}
              onChange={(e) => setPlazo(e.target.value)}
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
            <label >Sistema Frances:</label>
            <input
              type="number"
              value={cuotaFrances}
              readOnly
              className="bg-gray-100 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Sistema Alemán:</label>
            <input
              type="number"
              value={cuotaAleman}
              readOnly
              className="bg-gray-100 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Sistema Americano:</label>
            <input
              type="number"
              value={cuotaAmericano}
              readOnly
              className="bg-gray-100 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Capitalización Simple:</label>
            <input
              type="number"
              value={capitalizacionSimple}
              readOnly
              className="bg-gray-100 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Capitalización Compuesta:</label>
            <input
              type="number"
              value={capitalizacionCompuesta}
              readOnly
              className="bg-gray-100 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
            />
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <button
            onClick={calcularAmortizacionYCapitalizacion}
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

export default AmortizacionCapitalizacion;
