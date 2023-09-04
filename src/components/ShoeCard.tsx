import React from "react";

interface Props {
  imgUrl: string;
  bigShoeImage: string;
  onClick: (string: string) => {};
}

const ShoeCard = ({ imgUrl, bigShoeImage, onClick }: Props) => {
  const handleClick = () => {
    if (bigShoeImage !== imgUrl) {
      onClick(imgUrl);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1
      ${imgUrl === bigShoeImage ? "border-coral-red" : "border-none"}`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center rounded-xl max-sm:p-4 bg-cover sm:w-40 sm:h-40">
        <img
          className="object-contain"
          src={imgUrl}
          alt={imgUrl}
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
