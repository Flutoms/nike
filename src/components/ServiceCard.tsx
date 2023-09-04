import React from "react";

interface Props {
  imgURL: any;
  label: string;
  subtext: string;
}

const ServiceCard = ({ imgURL, label, subtext }: Props) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-8">
      <div className="flex w-11 h-11 justify-center items-center bg-coral-red rounded-full">
        <img width={24} height={24} src={imgURL} alt="" />
      </div>
      <h3 className="mt-8 text-2xl leading-normal font-semibold font-palanquin">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-2lx leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
