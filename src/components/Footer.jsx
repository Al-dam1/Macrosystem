import React from "react";

const Footer = () => {
  return (
    <footer className ="bg-gray-700">
      <section className="grid items-start grid-cols-3 m-8 ">
        <div className="text-left">
          <h2 className="text-2xl text-amber-100 mb-[5px]">Categorias</h2>
          <ul>
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Productos</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
            <li>
              <a>Política de devolución</a>
            </li>
            <li>
              <a>Política de envío</a>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl text-amber-100 mb-[5px]">Contactanos</h2>
          <ul>
            <li>
              <a>541134926049</a>
            </li>
            <li>
              <a>4755-0258</a>
            </li>
            <li>
              <a>macrosystemsm@gmail.com</a>
            </li>
            <li>
              <a>Moreno 3755</a>
            </li>
          </ul>
        </div>

        <div className="text-right">
          <h2 className="text-2xl text-amber-100 mb-[5px]">
            Sigamos conectados
          </h2>
          <ul>
            <li>
              <a>Instagram</a>
            </li>
          </ul>
        </div>
      </section>
     <div className="w-1/2 mx-auto mt-4 mb-4 border-t-4 border-blue-500"></div>

      <section className="flex flex-col items-start p-4">
      

        <div className="flex items-center gap-4 mt-12">
          <h2>Medios de pago</h2>
          <img src=" https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" className="h-12 "/>
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"className="h-12 " />
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" className="h-12 "/>
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png" className="h-12 " />

          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png"className="h-12 " />
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png" className="h-12 "/>
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-shopping@2x.png"className="h-12 " />
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/other@2x.png" className="h-12 "/>
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/argencard@2x.png" className="h-12 "/>
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cencosud@2x.png" className="h-12 "/>
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabaldebit@2x.png" className="h-12 "/>
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/maestro@2x.png" className="h-12 "/>
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visadebit@2x.png" className="h-12 "/>

          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png" className="h-12 "/>
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png" className="h-12 "/>
        </div>
        <div className="flex items-center gap-2 mt-8">
          <h2>Medios de envío</h2>
          <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/api/2682@2x.png" className="h-12 "/>
        </div>
      </section>
      <small className="flex w-full h-20 text-center bg-black align-center">
        Copyright Macrosystem - 20443635115 - 2026. Todos los derechos
        reservados. Defensa de las y los consumidores. Para reclamos{" "}
        <a href="https://autogestion.produccion.gob.ar/consumidores">
          ingresá acá.
        </a>{" "}
        / Botón de arrepentimiento
      </small>
    </footer>
  );
};

export default Footer;
