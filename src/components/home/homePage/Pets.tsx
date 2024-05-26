import React from "react";
import PetCard from "./PetCard";

const Pets = () => {
  return (
    <div className="max-w-[1000px] mx-auto py-10 md:py-20">
      <h2 className="text-4xl text-center mb-8">See All Pets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </div>
    </div>
  );
};

export default Pets;
