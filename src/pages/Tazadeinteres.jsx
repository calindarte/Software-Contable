import { useState } from "react";

const Tazadeinteres = () => {
    const [intereses, setIntereses] = useState("");
    const [principal, setPrincipal] = useState("");
    const [valorFuturo, setValorFuturo] = useState("");
    const [tasaInteres, setTasaInteres] = useState("");
    const [gananciaTotal, setGananciaTotal] = useState("");
    const [inversionInicial, setInversionInicial] = useState("");
    const [montoFinal, setMontoFinal] = useState("");
    const [tiempoAnios, setTiempoAnios] = useState("");
    const [tiempoMeses, setTiempoMeses] = useState("");
    const [tiempoDias, setTiempoDias] = useState("");
    const [tiempoTotal, setTiempoTotal] = useState("");

    const convertirTiempoAAnios = (anios, meses, dias) => {
        let tiempoEnAnios = 0;

        // Convertir los años a meses y sumarlos al total
        if (anios) {
            tiempoEnAnios += parseFloat(anios);
        }

        // Convertir los meses a años y sumarlos al total
        if (meses) {
            tiempoEnAnios += parseFloat(meses) / 12;
        }

        // Convertir los días a años y sumarlos al total
        if (dias) {
            tiempoEnAnios += parseFloat(dias) / 365;
        }

        return tiempoEnAnios;
    };


    const calcularInteres = () => {

        const totalEnAnios = convertirTiempoAAnios(tiempoAnios, tiempoMeses, tiempoDias);
        setTiempoTotal(totalEnAnios);

        if (intereses !== null && principal !== null) {
            const TIR = (intereses / principal) * 100;
            setMontoFinal(TIR);
        }

        if (valorFuturo !== null && tiempoTotal !== null && principal !== null) {
            const tasaInteres = Math.pow(valorFuturo / principal, 1 / tiempoTotal) - 1;
            const interesCompuesto = principal * Math.pow(1 + tasaInteres, tiempoTotal);
            setMontoFinal(interesCompuesto.toFixed(2));
        }

        if (tasaInteres !== null && tiempoTotal !== null) {
            const r = tasaInteres / 100;
            const n = tiempoTotal;
            const TIEA = (Math.pow((1 + r / n), n) - 1) * 100;
            setMontoFinal(TIEA);
        }

        if (gananciaTotal !== null && inversionInicial !== null) {
            const TRT = (gananciaTotal / inversionInicial) * 100;
            setMontoFinal(TRT);
        }
    };

    const handleReset = () => {
        setIntereses("");
        setPrincipal("");
        setValorFuturo("");
        setTasaInteres("");
        setGananciaTotal("");
        setInversionInicial("");
        setMontoFinal("");
        setTiempoAnios("");
        setTiempoMeses("");
        setTiempoDias("");
        setTiempoTotal('');
    };

    return (
        <div className="bg-[#f5f5f5] m-20 rounded-2xl shadow-lg">
            <div className="flex flex-col p-12">
                <h2 className="text-center font-medium text-2xl">
                    Calculadora de Taza de interés de retorno
                </h2>
                <div className="py-4 flex flex-col gap-3">
                    <div>
                        <div>
                            <b>I (Intereses obtenidos):</b> Representa la cantidad de intereses ganados durante el período de inversión.
                        </div>
                        <div>
                            <b>P (Principal o cantidad invertida inicialmente):</b> Es la cantidad de dinero inicial o principal que se invierte o presta.
                        </div>
                        <div>
                            <b>F (Valor futuro o cantidad total al final del período):</b> Representa la cantidad total de dinero al final del período de inversión, incluyendo tanto el capital inicial como los intereses ganados.
                        </div>
                        <div>
                            <b>n (Número de períodos de capitalización):</b> Indica la cantidad de períodos durante los cuales se capitaliza la inversión, por ejemplo, el número de años si la tasa de interés es anual.
                        </div>
                        <div>
                            <b>r (Tasa de interés nominal):</b> Representa la tasa de interés por período, generalmente expresada como un porcentaje.
                        </div>
                        <div>
                            <b>Ganancia total:</b> Es la cantidad total de dinero que se obtiene como resultado de la inversión, incluyendo tanto las ganancias como los intereses generados.
                        </div>
                        <div>
                            <b>Inversión inicial:</b> Es la cantidad de dinero que se invierte inicialmente.
                        </div>
                        <div>
                            <b>Interés Simple:</b> Es el interés calculado sobre el capital original únicamente, sin tener en cuenta los intereses acumulados en períodos anteriores.
                        </div>
                        <div>
                            <b>Monto Total:</b> Es la suma del capital inicial y el interés simple acumulado durante el período de tiempo especificado.
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col gap-3">
                <span className="tracking-wider mb-2 font-medium">Formulas:</span>
                    <div>
                        <b>Interés Simple (IS):</b> IS = P × r × n
                    </div>
                    <div>
                        <b>Valor Futuro (FV) en Interés Simple:</b> FV = P + IS
                    </div>
                    <div>
                        <b>Tasa de Interés Efectiva Anual (TIEA):</b> TIEA = (1 + r/n)^n - 1
                    </div>
                    <div>
                        <b>Tasa de Retorno Total (TRT):</b> TRT = (Ganancia total / Inversión inicial) × 100%
                    </div>
                </div>


                <div className="py-8 flex flex-col gap-3">
                    <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
                        <label>I - Intereses obtenidos:</label>
                        <input
                            type="number"
                            value={intereses}
                            onChange={(e) => setIntereses(parseFloat(e.target.value))}
                            className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
                        />
                    </div>
                    <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
                        <label>P - Principal o cantidad invertida inicialmente:</label>
                        <input
                            type="number"
                            value={principal}
                            onChange={(e) => setPrincipal(parseFloat(e.target.value))}
                            className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
                        />
                    </div>
                    <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
                        <label>F - Valor futuro o cantidad total al final del período:</label>
                        <input
                            type="number"
                            value={valorFuturo}
                            onChange={(e) => setValorFuturo(parseFloat(e.target.value))}
                            className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
                        />
                    </div>
                    <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
                        <label>Numero de Periodos (n):</label>
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
                        <label>r - Tasa de interés nominal (%):</label>
                        <input
                            type="number"
                            value={tasaInteres}
                            onChange={(e) => setTasaInteres(parseFloat(e.target.value))}
                            className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
                        />
                    </div>
                    <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
                        <label>Ganancia total:</label>
                        <input
                            type="number"
                            value={gananciaTotal}
                            onChange={(e) => setGananciaTotal(parseFloat(e.target.value))}
                            className="focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-md w-[20%] px-2"
                        />
                    </div>
                    <div className="bg-slate-200 p-4 flex gap-4 rounded-md shadow-md">
                        <label>Inversión inicial:</label>
                        <input
                            type="number"
                            value={inversionInicial}
                            onChange={(e) => setInversionInicial(parseFloat(e.target.value))}
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

export default Tazadeinteres;
