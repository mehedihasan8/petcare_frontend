"use client";
import React, { useState } from "react";
import PetCard from "./PetCard";

import SearchPets from "./SearchPets";
import { useGetAllPetsQuery } from "@/redux/features/pets/pets.api";
import { TPet } from "@/types/pets.type";
import { TQueryParam } from "@/types/global.type";
import { ImFileEmpty } from "react-icons/im";
import { Pagination, Spin } from "antd";

const Pets = () => {
  const [params, setParams] = useState<TQueryParam[]>([
    { name: "limit", value: 3 },
  ]);
  const { data, error, isFetching } = useGetAllPetsQuery(params);
  const [pagination, setPagination] = useState(1);

  const pets: TPet[] = data?.data?.data;
  const meta = data?.data?.meta;

  const handlePaginationChange = (page: number) => {
    // const newParams = [...params, { name: "page", value: page }];
    // setParams(newParams);
    setParams((prevParams) => [
      ...prevParams.filter((param) => param.name !== "page"),
      { name: "page", value: page },
    ]);
  };

  console.log("params--=>", params);

  // console.log("petsData--=>", pets);
  console.log("meta--=>", meta);
  // console.log("pagination--=>", pagination);
  return (
    <div className="max-w-[1000px] mx-auto py-10 md:py-20">
      <h2 className="text-4xl text-secondary font-bold text-center mb-5">
        See All Pets
      </h2>
      <SearchPets setParams={setParams} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 mt-10">
        {isFetching ? (
          <div className="col-span-full flex items-center justify-center">
            <Spin size="large" />
          </div>
        ) : (
          <>
            {pets && pets.length > 0 ? (
              pets.map((pet) => <PetCard pet={pet} key={pet?._id} />)
            ) : (
              <h4 className="col-span-full text-center text-gray-500 flex items-center justify-center gap-2 text-2xl">
                <ImFileEmpty className="w-10 h-10" /> No pets found.
              </h4>
            )}
          </>
        )}
      </div>
      <div className="flex items-center justify-center pt-5">
        <Pagination
          onChange={handlePaginationChange}
          defaultCurrent={1}
          pageSize={meta?.limit}
          total={meta?.total}
        />
      </div>
    </div>
  );
};

export default Pets;
