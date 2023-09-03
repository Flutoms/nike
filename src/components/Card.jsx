import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="rounded-lg bg-cardWhite px-6 py-8 ">
        <h3>This is a text element</h3>
        <p>This is a longer p tag</p>
      </div>
      <h3 className="text-base font-medium tracking-tight mt-4">
        Intelligent conversion funnel
      </h3>
      <p className="text-[.8rem] mt-2">
        Midlr empowers you to create irresistible <br /> conversion journeys
        that captivate users and ignite their <br /> desire to purchase your
        products.
      </p>
    </div>
  );
};

export default Card;
