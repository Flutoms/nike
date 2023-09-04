import React from "react";
import { star } from "../assets/icons";
interface Props {
  imgURL: string;
  name: string;
  price: string;
}

const PopularProductCard = ({ imgURL, name, price }: Props) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img className="" src={imgURL} alt="" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} width={20} height={20} alt="rating" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2l leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-montserrat font-semibold text-2lx text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
