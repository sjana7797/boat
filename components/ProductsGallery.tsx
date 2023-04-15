import tws from "../assets/images/tws.png";
import headphones from "../assets/images/headphones.png";
import smartwatch from "../assets/images/smartwatch.png";
import wiredHeadphones from "../assets/images/wired-headphones.png";

type Props = {};

function ProductsGallery({}: Props) {
  return (
    <section className="my-5 mx-auto w-full max-w-7xl grid grid-cols-4 gap-x-3">
      <div className="bg-cyan-700/50 rounded-md text-gray-700 p-2 flex gap-2 items-center shadow-md">
        <img src={tws.src} alt="TWS" className="w-32 drop-shadow" />
        <p className="text-xl font-medium tracking-wider uppercase">
          True wireless earphones
        </p>
      </div>
      <div className="bg-violet-400/50 rounded-md text-gray-700 p-2 flex gap-2 items-center shadow-md">
        <img src={headphones.src} alt="TWS" className="w-32 drop-shadow" />
        <p className="text-xl font-medium tracking-wider uppercase">
          True wireless earphones
        </p>
      </div>
      <div className="bg-gray-300/40 rounded-md text-gray-700 p-2 flex gap-2 items-center shadow-md">
        <img src={smartwatch.src} alt="TWS" className="w-32 drop-shadow" />
        <p className="text-xl font-medium tracking-wider uppercase">
          True wireless earphones
        </p>
      </div>
      <div className="bg-purple-300/40 rounded-md text-gray-700 p-2 flex gap-2 items-center shadow-md">
        <img src={wiredHeadphones.src} alt="TWS" className="w-32 drop-shadow" />
        <p className="text-xl font-medium tracking-wider uppercase">
          True wireless earphones
        </p>
      </div>
    </section>
  );
}

export default ProductsGallery;
