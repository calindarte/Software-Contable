import React from 'react';
import { useState } from "react";

const InteresCompuesto = () => {

    const [valorPresente, setValorPresente] = useState("");
    const [valorFuturo, setValorFuturo] = useState("");
    const [interes, setInteres] = useState("");
    const [anios, setAnios] = useState("");
    const [meses, setMeses] = useState("");
    const [dias, setDias] = useState("");
    let p = 0;

    const CalcularTiempo = () => {
        p =
            parseFloat(anios) +
            parseFloat(meses) / 12 +
            parseFloat(dias) / 365;

        //verificar si solo se ingresa el campo de años
        if (anios && !meses && !dias) {
            p = parseFloat(anios);
        }
        // Verificar si solo se ingresa el campo de meses
        if (meses && !anios && !dias) {
            p = parseFloat(meses) ; // Convertir meses a años
        }

        // Verificar si solo se ingresa el campo de días
        if (dias && !anios && !meses) {
            p = parseFloat(dias) / 365; // Convertir días a años
        }
    }

    const CalcularValorFuturo = () => {
        if (anios || meses || dias) {
            CalcularTiempo();
            if (valorPresente && interes && p) {

                const ResultInteres = interes / 100;

                const result = valorPresente * Math.pow((1 + ResultInteres), p);
                setValorFuturo(result);
                console.log("valorFuturo", valorFuturo);
            }
        }
        if (valorFuturo && interes && p) {
            const ResultInteres = interes / 100;

            const result = valorFuturo / Math.pow(1 + ResultInteres, p);
            setValorPresente(result);
            console.log("valorPresente", valorPresente);
        }
        if (valorFuturo && valorPresente && p) {

            const ResultInteres = Math.pow(valorFuturo/valorPresente,1/p)
            const result = ResultInteres - 1
            setInteres(result.toFixed(2));
            console.log("Interes", interes);
        }
        if (valorFuturo && valorPresente && interes) {

            const ResultInteres = interes / 100;
            const ResulTiempo = (Math.log(valorFuturo) - Math.log(valorPresente)) / Math.log(1+ResultInteres);
            setAnios(ResulTiempo);
        }
        


    }

    const Reset = () => {
        setValorPresente("");
        setValorFuturo("");
        setInteres("");
        setAnios("");
        setMeses("");
        setDias("");
    };

    return (
        <div style={stylesContainerPadre}>
            <h1 style={styleTitulo}>INTERES COMPUESTO</h1>
            <br />
            <p style={styleParrafo}>
                El interés compuesto es un concepto financiero que se refiere al cálculo de los intereses sobre el capital inicial, así como sobre los intereses acumulados anteriormente. En otras palabras, se trata de ganar intereses no solo sobre la inversión inicial, sino también sobre los intereses que ya se han generado.
            </p>

            <div style={styleContainerBotones}>
                <div style={StyleContainerGris}>
                    <label>Capital Presente</label>
                    <input type="number"
                        value={valorPresente}
                        onChange={(e) => setValorPresente(e.target.value)}
                        className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2" />
                </div>
                <br />
                <div style={StyleContainerGris}>
                    <label>Capital Futuro:</label>
                    <input
                        type="number"
                        value={valorFuturo}
                        onChange={(e) => setValorFuturo(e.target.value)}
                        className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
                    />
                </div>
                <br />
                <div style={StyleContainerGris}>
                    <label>Tasa de Interés Anual (%):</label>
                    <input type="number"
                        value={interes}
                        onChange={(e) => setInteres(e.target.value)}
                        className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2" />
                </div>
                <br />
                <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
                    <label>Periodo:</label>
                    <input
                        type="number"
                        value={anios}
                        onChange={(e) => setAnios(e.target.value)}
                        placeholder="Años"
                        className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"

                    />
                    <input
                        type="number"
                        value={meses}
                        onChange={(e) => setMeses(e.target.value)}
                        placeholder="Meses"
                        className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"

                    />
                    <input
                        type="number"
                        value={dias}
                        onChange={(e) => setDias(e.target.value)}
                        placeholder="Días"
                        className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"

                    />
                </div>
                <br />
                <div className="flex justify-center gap-8">
                    <button
                        style={StyleBtnCalcular}
                        onClick={() => CalcularValorFuturo()}>
                        Calcular
                    </button>
                    <button
                        style={StyleBtnLimpiar}
                        onClick={Reset}>
                        Limpiar
                    </button>
                </div>
            </div>




        </div>
    );
};

const StyleBtnCalcular = {
    background: "#F1C40F",
    borderRadius: 30,
    width: 150,
    justifyContent: "center",
    left: 200
}

const StyleBtnLimpiar = {
    background: "#2980B9",
    borderRadius: 30,
    width: 150,
    justifyContent: "center"
}

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
    fontSize: 20
};

const styleParrafo = {
    textAlign: 'center',
    fontSize: 20
}

const styleContainerBotones = {
    paddingTop: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    justifyContent: "center"
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



/*
const InteresCompuesto = () => {
    const [CalcularInteresCompuesto, setCalcularInteresCompuesto] = useState("");
    const [tasaInteres, setTasaInteres] = useState("");
    const [tiempoAnios, setTiempoAnios] = useState("");
    const [tiempoMeses, setTiempoMeses] = useState("");
    const [tiempoDias, setTiempoDias] = useState("");
    const [capitalFinal, setCapitalFinal] = useState("");
    const [interesCompuesto, setInteresCompuesto] = useState("");
    const [montoFinal, SetMontoFinal] = useState("");

    const calcularInteresCompuesto = () => {
        let CI = parseFloat(capitalInicial);
        let i = parseFloat(tasaInteres) / 100; // Convertir el porcentaje a decimal

        // Calcular el tiempo total en años
        let t =
            parseFloat(periodoAnios) +
            parseFloat(periodoMeses) / 12 +
            parseFloat(periodoDias) / 365;

        // Verificar si solo se ingresa el campo de años
        if (periodoAnios && !periodoMeses && !periodoDias) {
            t = parseFloat(periodoAnios);
        }
        // Verificar si solo se ingresa el campo de meses
        if (periodoMeses && !periodoAnios && !periodoDias) {
            t = parseFloat(periodoMeses) / 12; // Convertir meses a años
        }
        // Verificar si solo se ingresa el campo de días
        if (periodoDias && !periodoAnios && !periodoMeses) {
            t = parseFloat(periodoDias) / 365; // Convertir días a años
        }

        if (!isNaN(CI) && !isNaN(i) && !isNaN(t)) {
            const calculatedInterest = CI * Math.pow(1 + i, t) - CI;
            setInteresCompuesto(calculatedInterest.toFixed(2));

            const total = CI * Math.pow(1 + i, t);
            setCapitalFinal(total.toFixed(2));
        }
    };

    const handleReset = () => {
        setCapitalInicial("");
        setTasaInteres("");
        setPeriodoAnios("");
        setPeriodoMeses("");
        setPeriodoDias("");
        setInteresCompuesto("");
        setCapitalFinal("");
    };

    return (
        <div className="bg-[#f5f5f5] m-20 rounded-2xl shadow-lg">
            <div className="flex flex-col p-12">
                <h2 className="text-center font-medium text-2xl">
                    Calculadora de Interés Compuesto
                </h2>

                <div className="py-8 flex flex-col gap-3">

                    <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
                        <label>Capital Inicial:</label>
                        <input
                            type="number"
                            value={interesCompuesto}
                            onChange={(e) => setInteresCompuesto(e.target.value)}
                            className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
                        />
                    </div>
                    <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
                        <label>Interes:</label>
                        <input
                            type="number"
                            value={capitalFinal}
                            onChange={(e) => setCapitalFinal(e.target.value)}
                            className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
                        />
                    </div>

                    <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
                        <label>Tiempo</label>
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
                        <label>Monto Final:</label>
                        <input
                            type="number"
                            value={montoFinal}
                            onChange={(e) => setMontoFinal(e.target.value)}
                            className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"

                        />
                    </div>

                    <div className="flex justify-center gap-8">
                        <button
                            onClick={calcularInteresCompuesto}
                            className="bg-blue-300 px-6 py-2 rounded-full hover:bg-blue-500 shadow-md"
                        >
                            Calcular
                        </button>
                        <button
                            onClick={()=>handleReset()}
                            className="bg-amber-500 px-6 py-2 rounded-full hover:bg-amber-600 shadow-md"
                        >
                            Resetear
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InteresCompuesto;

*/