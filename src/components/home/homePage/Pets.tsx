import React from "react";
import PetCard from "./PetCard";
import SearchPets from "./SearchPets";

const Pets = () => {
  return (
    <div className="max-w-[1000px] mx-auto py-10 md:py-20">
      <h2 className="text-4xl text-secondary font-bold text-center mb-5">
        See All Pets
      </h2>
      <SearchPets />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 mt-10">
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
