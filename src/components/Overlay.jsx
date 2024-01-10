import { FaArrowDownLong, FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { scenes } from "./Experience";

export const Overlay = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }, []);
  return (
    <>
      <div
        className={`absolute z-10 top-0 left-0 bottom-0 right-0 flex flex-col justify-between pointer-events-none text-black ${visible ? "" : "opacity-0"
          } transition-opacity duration-1000`}
      >
        <div className="w-40 mx-auto mt-8">
          <a href="https://www.fontspace.com/category/racing">
            <img
              src="https://see.fontimg.com/api/renderfont4/eZ5wg/eyJyIjoiZnMiLCJoIjo0OSwidyI6MTAwMCwiZnMiOjQ5LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RGllZ28gSGlnYQ/dashhorizon.png"
              alt="Racing fonts" />
          </a>
        </div>

        <div className="bg-gradient-to-t from-white/90 pt-20 pb-10 p-4 flex items-center flex-col text-center">
          <h1 className="text-5xl font-extrabold">
            Escola de Drift
          </h1>
          <p className="text-opacity-60 italic">
            Explore a arte da derrapagem controlada
          </p>
          <div className="flex items-center gap-12 mt-10">

            <a href="#">
              <button className="pointer-events-auto hover:cursor-pointer w-44 font-semibold text-xl bg-red-500 px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2">
                <span>Adquirir</span>
                <FaArrowRightLong size={18} />
              </button>
            </a>

            <a href="#">
              <button className="pointer-events-auto hover:cursor-pointer w-44 font-semibold text-xl bg-black px-4 py-3 rounded-lg text-white flex items-center justify-center gap-2">
                <span>Saiba Mais</span>
                <FaArrowDownLong size={18} />
              </button>
            </a>

          </div>
        </div>
      </div>
    </>
  );
};
