import React from "react";
import { Van, WalletMinimal, Smartphone } from "lucide-react";
const Banner = () => {
  return (
    <div className="flex flex-row w-full gap-12 p-8 bg-gray-600 justify-evenly">
      <div className="flex flex-row justify-center gap-4 bg-gray-600">
        {/* Bloque 1 */}
        <div className="flex flex-col items-center p-2 text-center">
          <div className="p-2 bg-gray-800 rounded-full w">
            <Van />
          </div>
          <h3>🚚 ENVÍOS A TODO EL PAÍS</h3>
          <p>Recibí tu pedido en la comodidad de tu casa.</p>
        </div>

        {/* Bloque 2 */}
        <div className="flex flex-col items-center p-2 text-center">
          <div className="p-2 bg-gray-800 rounded-full">
            <WalletMinimal />
          </div>
          <h3>💳 PAGA CON TU MÉTODO FAVORITO</h3>
          <p>Tu pago está protegido y verificado.</p>
        </div>

        {/* Bloque 3 */}
        <div className="flex flex-col items-center p-2 text-center">
          <div className="p-2 bg-gray-800 rounded-full">
            <Smartphone />
          </div>
          <h3>💻 ARMA TU PC A TU GUSTO</h3>
          <p>Escribinos al 11-3492-6049 para la mejor atención</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
