"use client";
import { useGetSinglePetQuery } from "@/redux/features/pets/pets.api";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import demoImage from "../../../../../public/petcare-photo.jpg";
import { Spin } from "antd";

const PetDetails = () => {
  const { id } = useParams();

  const { data, isFetching, error } = useGetSinglePetQuery(id);
  console.log("data---=>", data);

  if (isFetching) {
    return <Spin size="large" />;
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
  } = data.data;

  return (
    <div className="px-2 md:px-[10rem] mx-auto md:pt-10 md:pb-14 h-full">
      <div className="relative h-[340px]">
        <div className="w-full h-[200px] md:h-[300px] md:w-1/2 rounded-lg">
          <Image
            className="h-full w-full object-cover rounded-lg"
            src={demoImage}
            alt="Winding mountain road"
          />
        </div>
        <div className="absolute bottom-0 right-0 bg-secondary bg-cardBackground w-full md:w-[60%] rounded-lg md:rounded-l-md px-5 py-4 md:py-8 mb-5 md:mb-0">
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">
            {name}
          </h2>
          <p className="text-white text-sm md:text-base">{description}</p>
        </div>
      </div>

      <div className="text-left">
        <p className="text-secondary font-semibold">
          Adoption Requirements:{" "}
          <span className="text-gray-500 text-sm">{adoptionRequirements}</span>
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
          Created At:{" "}
          <span className="text-gray-500 text-sm">
            {new Date(createdAt).toLocaleString()}
          </span>
        </p>
        <p className="text-secondary font-semibold">
          Updated At:{" "}
          <span className="text-gray-500 text-sm">
            {new Date(updatedAt).toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PetDetails;
