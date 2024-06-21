"use client";
import { useGetAllPetsQuery } from "@/redux/features/pets/pets.api";
import { TPet } from "@/types/pets.type";
import { Spin } from "antd";
import PetCard from "./PetCard";
import { ImFileEmpty } from "react-icons/im";

const FamousPets = () => {
  const { data, isFetching } = useGetAllPetsQuery([
    { name: "limit", value: 9 },
  ]);
  const pets: TPet[] = data?.data?.data;

  return (
    <div className="max-w-[1100px] mx-auto py-10 md:py-20">
      <h2 className="text-4xl font-bold text-center">Our Famous Pets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 mt-10">
        {isFetching ? (
          <div className="col-span-full flex items-center justify-center">
            <Spin size="default" />
          </div>
        ) : (
          <>
            {pets && pets.length > 0 ? (
              pets.map((pet) => <PetCard pet={pet} key={pet?.id} />)
            ) : (
              <h4 className="col-span-full text-center text-gray-500 flex items-center justify-center gap-2 text-2xl">
                <ImFileEmpty className="w-10 h-10" /> No pets found.
              </h4>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FamousPets;
