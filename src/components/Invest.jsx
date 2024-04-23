import React from "react";
import landing from "../assets/landing.png";
import trophy from "../assets/largest-broker.svg";
import press from "../assets/press-logos.png"

function Invest() {
  return (
    <div className="flex flex-col items-center mt-20 mx-48">
      <div>
        <img className="h-96" src={landing} alt="" />
      </div>
      <div className="flex flex-col items-center mt-16 ">
        <h2 className="text-5xl tracking-wide text-neutral-900">
          {" "}
          Invest in everything
        </h2>
        <p className="text-xl tracking-wider text-neutral-800 font-light mt-5">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <a
          href="#"
          className="bg-sky-600 text-white px-8 mt-10 py-2 text-xl rounded-sm hover:bg-black"
        >
          Sign up now
        </a>
      </div>
      <div className="flex  gap-32 mt-20">
        <img src={trophy} className="h-80" alt="" />
        <div className="">
          <h2 className="text-4xl  text-neutral-800">
            Largest stock broker in India
          </h2>
          <p className="mt-8 font-light">
            1.3+ Crore Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="flex mt-8 pl-5 font-light tracking-wide">
            <ul className="list-disc mr-20">
              <li className="my-2">Futures and Options</li>
              <li className="my-2">Commodity derivatives</li>
              <li className="my-2">Currency derivatives</li>
            </ul>
            <ul className="list-disc">
              <li className="my-2">Stocks & IPOs</li>
              <li className="my-2">Direct mutual funds</li>
              <li className="my-2">Bonds and Govt. Securities</li>
            </ul>
          </div>
          <img src={press} className="mt-5" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Invest;
