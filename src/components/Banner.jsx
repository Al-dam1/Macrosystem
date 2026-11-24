import React from "react";
import { Van, WalletMinimal, Smartphone } from "lucide-react";
const Banner = () => {
  return (
    <div className="flex flex-row w-full gap-12 p-8  justify-evenly fondo-tecnologico items-center">
      <div className="flex md:flex-row justify-center gap-5 w-[90%] flex-col w-auto  ">
        {/* Bloque 1 */}
        <div className="min-w-0 w-full rounded-2xl border border-cyan-400/60 bg-[#10153D]/50 p-4 shadow-xl backdrop-blur-[250px] ">
          <div className="p-2 bg-gray-800 rounded-full w-12 h-12  flex justify-center items-center mx-auto">
            <Van />
          </div>
          <h3 className="text-white text-[20px] text-center mt-2">🚚 ENVÍOS A TODO EL PAÍS</h3>
          <p className="text-white text-[15px] mt-2 ">Recibí tu pedido en la comodidad de tu casa.</p>
        </div>

        {/* Bloque 2 */}
        <div className="min-w-0 w-full rounded-2xl border border-cyan-400/60 bg-[#10153D]/50 p-4 shadow-xl backdrop-blur-xl  ">
          <div className="p-2 bg-gray-800 rounded-full w-12 h-12 flex justify-center items-center mx-auto">
            <WalletMinimal />
          </div>
          <h3 className="text-white text-[20px] text-center mt-2">💳 PAGA CON TU MÉTODO FAVORITO</h3>
          <p className="text-white text-[15px]  mt-2">Tu pago está protegido y verificado.</p>
        </div>

        {/* Bloque 3 */}
        <div className="min-w-0 w-full rounded-2xl border border-cyan-400/60 bg-[#10153D]/50 p-4 shadow-xl backdrop-blur-xl ">
          <div className="p-2 bg-gray-800 rounded-full w-12 h-12 flex justify-center items-center mx-auto">
            <Smartphone />
          </div>
          <h3 className="text-white text-[20px] text-center mt-2">💻 ARMA TU PC A TU GUSTO</h3>
          <p className="text-white text-[15px]  mt-2">Escribinos al 11-3492-6049 para la mejor atención.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
