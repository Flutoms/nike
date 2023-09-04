import React from "react";
import { star } from "../assets/icons";

interface Props {
  imgURL: any;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard = ({ imgURL, customerName, rating, feedback }: Props) => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <img
        className="rounded-full object-cover"
        width={120}
        height={120}
        src={imgURL}
        alt=""
      />
      <p className="text-center mt-6 max-w-sm info-text">{feedback}</p>
      <div className="mt-3 flex justify-center gap-3">
        <img
          className="object-contain m-0"
          src={star}
          width={20}
          height={20}
          alt=""
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
