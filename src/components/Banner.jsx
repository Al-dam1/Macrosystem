import React from "react";
import { Van, WalletMinimal,Smartphone } from "lucide-react";
const Banner = () => {
  return (
    <div className="flex flex-row justify-between bg-gray-600">
    
      <div>
        <div className="flex justify-center p-2 bg-gray-800 rounded-full">
          <Van />
        </div>
        <h3>🚚 ENVÍOS A TODO EL PAIS </h3>
        <p>Recibi tu pedido en la comodidad de tu casa.</p>
      </div>
      <div>
         <div className="flex justify-center p-2 bg-gray-800 rounded-full">
          <WalletMinimal />
        </div>
        <div>
          <h3>💳 PAGA CON TU METODO FAVORITO</h3>
          <p>Tu pago esta protegido y verificado.</p>
        </div>
      </div>
      <div>
        <div className="flex justify-center p-2 bg-gray-800 rounded-full">
          <Smartphone />{" "}
        </div>
        <div>
          <h3>💻 ARMA TU PC A TU GUSTO</h3>
          <p>Escribinos al 11-3492-6049 para la mejor atencion</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
