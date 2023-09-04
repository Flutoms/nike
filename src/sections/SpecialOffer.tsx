import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section
      id="special-offer"
      className="padding flex justify-wrap items-center gap-10 max-container max-xl:flex-col-reverse "
    >
      <div className=" flex flex-1 justify-center items-center">
        <img
          src={offer}
          width={773}
          height={687}
          alt="shoe"
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col items-start ">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mb-4 lg:max-w-lg mt-5 max-sm:mb-5  text-[1rem] max-sm:text-[.8rem] font-mulish text-slate-gray">
          Experience top notch quality with our sought-after selections.
          Discover a world of comfortm design and value Discover stylish Nike
          arrivals, quality comfort, and innovation for your active life
        </p>

        <p className="mb-10 lg:max-w-lg max-sm:mb-5  text-[1rem] max-sm:text-[.8rem] font-mulish text-slate-gray">
          Experience top notch quality with our sought-after selections.
          Discover a world of comfortm design and value Discover stylish Nike
          arrivals, quality comfort, and innovation for your active life
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View details" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
