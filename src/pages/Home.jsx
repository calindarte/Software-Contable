import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" flex flex-col items-center rounded-2xl py-20 gap-16 m-20 shadow-xl bg-[#f5f5f5]  ">
      <div className="text-center flex flex-col gap-y-8 ">
        <h1 className="text-3xl font-medium">
          Software De Matemáticas Financieras
        </h1>
        <span className="text-xl">¿Qué desea Calcular?</span>
      </div>
      <div className="flex gap-20">

      <div>
        <ul className=" text-xl border-[rgb(39,24,79)] border text-center rounded-xl overflow-hidden shadow-md cursor-pointer">
          <Link to="/interes-simple">
            <li className="py-6 px-20 border bg-blue-200 hover:bg-amber-400 ">
              Interés Simple
            </li>
          </Link>
          <Link to="/interes-compuesto">
            <li className="py-6 px-20 border bg-blue-200 hover:bg-amber-400">
              Interés Compuesto
            </li>
          </Link>
          <Link to="/anualidad">
            <li className="py-6 px-20 border bg-blue-200 hover:bg-amber-400">Anualidad</li>
          </Link>
        </ul>
      </div>
      <div>
        <ul className=" text-xl border-[rgb(39,24,79)] border text-center rounded-xl overflow-hidden shadow-md cursor-pointer">
          <Link to="/gradientes">
            <li className="py-6 px-20 border bg-blue-200 hover:bg-amber-400 ">
              Gradientes
            </li>
          </Link>
          <Link to="/amortizacion-capitalizacion">
            <li className="py-6 px-10 border bg-blue-200 hover:bg-amber-400">
              Amortización y Capitalización
            </li>
          </Link>
          <Link to="/tasa-interna-retorno">
            <li className="py-6 px-20 border bg-blue-200 hover:bg-amber-400">TIR</li>
          </Link>
        </ul>
      </div>
      </div>
      
    </div>
  );
};

export default Home;
