import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="flex justify-center flex-wrap gap-9 padding max-container"
    >
      {services.map((service) => (
        <ServiceCard
          key={service.name}
          imgURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
        />
      ))}
    </section>
  );
};

export default Services;
