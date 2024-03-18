import React from 'react';
import { useState } from "react";
import FORMULAS from "../images/FORMULAS.png"

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
            p = parseFloat(meses); // Convertir meses a años
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

            const ResultInteres = Math.pow(valorFuturo / valorPresente, 1 / p)
            const result = ResultInteres - 1
            setInteres(result.toFixed(2));
            console.log("Interes", interes);
        }
        if (valorFuturo && valorPresente && interes) {

            const ResultInteres = interes / 100;
            const ResulTiempo = (Math.log(valorFuturo) - Math.log(valorPresente)) / Math.log(1 + ResultInteres);
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
            <br />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <div style={ContenedorTex1}>
                    <p style={{textAlign: 'center' }}>¿Cómo puedo calcular?</p>
                    <p>capital presente = capital futuro + tasa de interés + período</p>
                    <p>capital futuro = capital presente + tasa de interés + período</p>
                    <p>tasa de interés = capital presente + capital futuro + período</p>
                    <p>período = capital presente + capital futuro + tasa de interés</p>
                </div>
                <div style={ContenedorTex1}>
                    <p style={{textAlign: 'center' }}>Formulas</p>
                    <p>capital presente: C = MC/1(+i)^n</p>
                    <p>capital futuro: MC = C*(1+i)^n</p>
                    <p>periodo: N = log MC - log C/log(1+i)</p>
                    <p>tasea de interes: i = (MC/C)^1/n-1</p>
                </div>
            </div>

            <br />
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

const ContenedorTex1 = {
    padding: '20px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    fontWeight: 'bold',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    outline: '2px solid #ffff00',
}

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
