import { useState } from "react";

const InteresSimple = () => {
  const [capital, setCapital] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");
  const [tiempoAnios, setTiempoAnios] = useState("");
  const [tiempoMeses, setTiempoMeses] = useState("");
  const [tiempoDias, setTiempoDias] = useState("");
  const [montoFinal, setMontoFinal] = useState("");
  const [interesInput, setInteresInput] = useState("");

  const calcularInteres = () => {
    let VP = parseFloat(capital);
    let i = parseFloat(tasaInteres) / 100; // Convertir el porcentaje a decimal

    // Calcular tiempo total en años
    let t =
      parseFloat(tiempoAnios) +
      parseFloat(tiempoMeses) / 12 +
      parseFloat(tiempoDias) / 365;

    //verificar si solo se ingresa el campo de años
    if (tiempoAnios && !tiempoMeses && !tiempoDias) {
      t = parseFloat(tiempoAnios);
    }
    // Verificar si solo se ingresa el campo de meses
    if (tiempoMeses && !tiempoAnios && !tiempoDias) {
      t = parseFloat(tiempoMeses) / 12; // Convertir meses a años
    }

    // Verificar si solo se ingresa el campo de días
    if (tiempoDias && !tiempoAnios && !tiempoMeses) {
      t = parseFloat(tiempoDias) / 365; // Convertir días a años
    }

    if (interesInput && isNaN(VP) && !isNaN(i) && !isNaN(t)) {
      VP = parseFloat(interesInput) / (i * t); // Calcular el capital (VP)
      setCapital(VP.toFixed(2));
    }

    if (interesInput && !isNaN(VP) && isNaN(i) && !isNaN(t)) {
      // Si se ingresaron valores válidos para principal y tiempo pero no para tasa de interés
      i = parseFloat(interesInput) / (VP * t); // Calcular la tasa de interés
      setTasaInteres((i * 100).toFixed(2));
    }

    if (interesInput && !isNaN(VP) && !isNaN(i) && isNaN(t)) {
      // Si se ingresaron valores válidos para interesInput, principal y tasa de interes pero no para el tiempo
      t = parseFloat(interesInput) / (VP * i); // Calcular el tiempo
      setTiempoAnios(Math.floor(t));
      const remainingMonths = ((t - Math.floor(t)) * 12).toFixed(0);
      setTiempoMeses(remainingMonths);
      const remainingDays = (
        (t - Math.floor(t)) * 365 -
        remainingMonths * 30
      ).toFixed(0);
      setTiempoDias(remainingDays);
    }

    if (!isNaN(VP) && !isNaN(i) && !isNaN(t)) {
      // Si se ingresaron valores válidos para principal, tasa de interés y tiempo
      const calculatedInterest = VP * i * t;
      const total = VP + calculatedInterest;
      setInteresInput(calculatedInterest.toFixed(2));
      setMontoFinal(total.toFixed(2));
    } else if (!isNaN(VP) && !isNaN(i) && isNaN(t)) {
      // Si se ingresaron valores válidos para principal y tasa de interés pero no para tiempo
      t = (montoFinal / VP - 1) / i;

      setTiempoAnios(Math.floor(t));
      const remainingMonths = ((t - Math.floor(t)) * 12).toFixed(0);
      setTiempoMeses(remainingMonths);
      const remainingDays = (
        (t - Math.floor(t)) * 365 -
        remainingMonths * 30
      ).toFixed(0);
      setTiempoDias(remainingDays);
    } else if (!isNaN(VP) && isNaN(i) && !isNaN(t)) {
      // Si se ingresaron valores válidos para principal y tiempo pero no para tasa de interés
      i = (montoFinal / VP - 1) / t;
      setTasaInteres((i * 100).toFixed(2));
    } else if (isNaN(VP) && !isNaN(i) && !isNaN(t)) {
      // Si se ingresaron valores válidos para tasa de interés y tiempo pero no para principal
      VP = montoFinal / (1 + i * t);
      setCapital(VP.toFixed(2));
    }
  };

  const handleReset = () => {
    setCapital("");
    setTasaInteres("");
    setTiempoAnios("");
    setTiempoMeses("");
    setTiempoDias("");
    setInteresInput("");
    setMontoFinal("");
  };

  return (
    <div className="bg-[#f5f5f5] m-20 rounded-2xl shadow-lg">
      <div className="flex flex-col p-12">
        <h2 className="text-center font-medium text-2xl">
          Calculadora de Interés Simple
        </h2>
        <p className="mt-4">
          Calculadora de <b>interés simple</b> diseñada para ayudar a los usuarios a
          determinar el interés, el capital, la tasa de interés, el tiempo, y el
          monto total. El objetivo principal es ofrecer una herramienta fácil de
          usar para calcular rápidamente estos valores financieros básicos sin
          la necesidad de realizar cálculos manuales complicados. Los usuarios
          pueden ingresar el capital inicial que desean invertir, la tasa de
          interés anual aplicable y el período de tiempo durante el cual desean
          calcular el interés. El software acepta el tiempo en años, meses y
          días para una mayor flexibilidad en los cálculos. Una vez que se
          ingresan estos datos, el software realiza automáticamente los cálculos
          necesarios para determinar el interés simple y el monto total al final
          del período especificado.
        </p>
        <div className="flex flex-col items-center my-4">
        <span className="tracking-wider mb-2 font-medium">Formulas:</span>
        <div className=" flex flex-col">
        <span> <b>Interes Simple: I</b>  = (C) (i) (t)</span>
        <span><b>Monto: M </b> = C ( 1 + (i) (t) )</span>
        <span><b>Capital: C</b>  = I / (i) (t)</span>
        <span><b>Tasa de Interes: i</b>  = I / (C) (t)</span>
        <span><b>Tiempo: t</b>  = I / (C) (i)</span>

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
            <label>Interés:</label>
            <input
              type="number"
              value={interesInput}
              onChange={(e) => setInteresInput(e.target.value)}
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"

            />
          </div>
          <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
            <label>Monto Total:</label>
            <input
              type="number"
              value={montoFinal}
              onChange={(e) => setMontoFinal(e.target.value)}
              className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"

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

export default InteresSimple;
