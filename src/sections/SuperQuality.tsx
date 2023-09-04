import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex padding max-container items-center max-lg:flex-col gap-10 w-full"
    >
      <div className="flex flex-1 flex-col items-start ">
        <h2 className="text-4xl font-palanquin font-bold">
          We Provide You <span className="text-coral-red">Super</span> <br />
          <span className="text-coral-red">Quality</span> Products
        </h2>
        <p className="mb-10 lg:max-w-lg mt-2 max-sm:mb-5  text-[1rem] max-sm:text-[.8rem] font-mulish text-slate-gray">
          Experience top notch quality with our sought-after selections.
          Discover a world of comfortm design and value
          <br />
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="View details" />
      </div>
      <div className=" flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          width={517}
          height={522}
          alt="shoe"
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
