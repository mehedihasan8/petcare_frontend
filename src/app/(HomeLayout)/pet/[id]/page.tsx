"use client";
import { useGetSinglePetQuery } from "@/redux/features/pets/pets.api";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { Button, Spin } from "antd";
import AdaptionRequestModal from "@/app/(DashboardLayout)/dashboard/customer/pet-adaption/AdaptionRequestModal";

const PetDetails = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  const { data, isFetching, error } = useGetSinglePetQuery(id);
  // console.log("data---=>", data);

  if (isFetching) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
        <Spin size="large" />
      </div>
    );
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const {
    adoptionRequirements,
    age,
    breed,
    createdAt,
    description,
    location,
    medicalHistory,
    name,
    size,
    species,
    temperament,
    updatedAt,
    photo,
  } = data.data;

  return (
    <>
      <AdaptionRequestModal open={open} setOpen={setOpen} pet={data?.data} />
      <div className="px-2 md:px-[10rem] mx-auto md:pt-10 md:pb-14 h-full">
        <div className="relative h-[340px]">
          <div className="w-full h-[200px] md:h-[300px] md:w-1/2 rounded-lg">
            <Image
              className="h-full w-full object-cover object-center rounded-lg"
              src={photo}
              alt="Winding mountain road"
              width={500}
              height={500}
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-secondary bg-cardBackground w-full md:w-[60%] rounded-lg md:rounded-l-md px-5 py-4 md:py-8 mb-5 md:mb-0">
            <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">
              {name}
            </h2>
            <p className="text-white text-sm md:text-base">{description}</p>
          </div>
        </div>

        <div className="text-left my-4">
          <p className="text-secondary font-semibold">
            Name: <span className="text-gray-500 text-sm">{name}</span>
          </p>
          <p className="text-secondary font-semibold">
            Adoption Requirements:{" "}
            <span className="text-gray-500 text-sm">
              {adoptionRequirements}
            </span>
          </p>
          <p className="text-secondary font-semibold">
            Age: <span className="text-gray-500 text-sm">{age}</span>
          </p>
          <p className="text-secondary font-semibold">
            Breed: <span className="text-gray-500 text-sm">{breed}</span>
          </p>
          <p className="text-secondary font-semibold">
            Size: <span className="text-gray-500 text-sm">{size}</span>
          </p>
          <p className="text-secondary font-semibold">
            Location: <span className="text-gray-500 text-sm">{location}</span>
          </p>
          <p className="text-secondary font-semibold">
            Species: <span className="text-gray-500 text-sm">{species}</span>
          </p>
          <p className="text-secondary font-semibold">
            Temperament:{" "}
            <span className="text-gray-500 text-sm">{temperament}</span>
          </p>
          <p className="text-secondary font-semibold">
            Medical History:{" "}
            <span className="text-gray-500 text-sm">{medicalHistory}</span>
          </p>
          <p className="text-secondary font-semibold">
            Description:{" "}
            <span className="text-gray-500 text-sm">{description}</span>
          </p>
        </div>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-secondary text-white hover:transition-all ease-in-out duration-500 border-[1.5px] rounded-lg hover:bg-white hover:text-secondary"
            onClick={() => {
              setOpen(true);
            }}
          >
            Add Adoption Request
          </button>
        </div>
      </div>
    </>
  );
};

export default PetDetails;
