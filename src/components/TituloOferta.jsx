import React from "react";

const TituloOferta = ({ texto }) => {
  return (
    <div className="flex items-center w-full p-4 m-8">
      <h2
        className="text-lg font-bold text-white p-4 mr-8
               bg-[radial-gradient(circle_at_120.71%_50%,_#ff72ff_0,_#eb5bff_25%,_#b53cf2_50%,_#7622e3_75%,_#021cdb_100%)]">
        {texto}
      </h2>
    </div>
  );
};

export default TituloOferta;
