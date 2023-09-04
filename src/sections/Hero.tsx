import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImage, setbigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="hero"
      className="xl:padding-1 padding-b w-full flex xl:flex-row 
      flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div
        className="relative xl:w-2/5 flex flex-col justify-center 
      items-start w-full max-xl:padding-x pt-28 padding mt-[8rem] max-sm:mt-[8rem] "
      >
        <p className="text-xl font-mulish max-sm:text-[1rem] text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 max-sm:mt-5 font-palanquin text-8xl max-sm:text-[4rem] max-sm:leading-[4rem] font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 max-sm:mt-[.01rem]">
            Nike
          </span>{" "}
          Shoes
        </h1>
        <p className="mt-4 mb-10 max-sm:mb-5  text-[1rem] max-sm:text-[.8rem] font-mulish leading-1 max-sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 max-sm:mt-10 gap-16">
          {statistics.map((stat) => (
            <div key={stat.value}>
              <p className="text-4xl max-sm:text-[2rem] m-0 p-0 font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative flex-1 flex justify-center 
      items-center xl:min-h-screen 
      max-xl:py-40 bg-center bg-primary bg-hero"
      >
        <img
          src={bigShoeImage}
          width={610}
          height={510}
          alt="shoe"
          className="object-contain relative z-10"
        />
        <div className="flex gap-4 sm:gap-6 absolute z-10 -bottom-20 sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <ShoeCard
              imgUrl={shoe.thumbnail}
              bigShoeImage={bigShoeImage}
              onClick={(bigShoe) => {
                setbigShoeImage(bigShoe);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
