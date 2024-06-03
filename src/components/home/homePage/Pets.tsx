"use client";
import React, { useState } from "react";
import PetCard from "./PetCard";

import SearchPets from "./SearchPets";
import { useGetAllPetsQuery } from "@/redux/features/pets/pets.api";
import { TPet } from "@/types/pets.type";
import { TQueryParam } from "@/types/global.type";
import { ImFileEmpty } from "react-icons/im";

const Pets = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data, error, isFetching } = useGetAllPetsQuery(params);
  const pets: TPet[] = data?.data?.data;

  console.log("petsData--=>", pets);
  // console.log("petsData params--=>", params);
  // console.log("petsError--=>", error);
  // console.log("petsIsFetching--=>", isFetching);
  return (
    <div className="max-w-[1000px] mx-auto py-10 md:py-20">
      <h2 className="text-4xl text-secondary font-bold text-center mb-5">
        See All Pets
      </h2>
      <SearchPets setParams={setParams} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 mt-10">
        {pets && pets.length > 0 ? (
          pets.map((pet) => <PetCard pet={pet} key={pet?._id} />)
        ) : (
          <h4 className="col-span-full text-center text-gray-500 flex items-center justify-center gap-2 text-2xl">
            <ImFileEmpty className="w-10 h-10" /> No pets found.
          </h4>
        )}
      </div>
    </div>
  );
};

export default Pets;
