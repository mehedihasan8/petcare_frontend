"use client";
import { Button } from "antd";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddPetModal from "./AddPetModal";
import PetDataWithFilter from "./PetDataWithFilter";

const PetManagement = () => {
  const [open, setOpen] = useState(false);
  const modalOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="flex items-center justify-between px-2 py-4 mb-4 border-b-2">
        <h2 className="text-2xl font-bold">Pet Management</h2>
        <AddPetModal open={open} setOpen={setOpen} />
        <button
          className="flex items-center gap-2 px-4 py-2 bg-secondary text-white hover:transition-all ease-in-out duration-500 border-[1.5px] rounded-lg hover:bg-white hover:text-secondary"
          onClick={modalOpen}
        >
          <FaPlus />
          Add New Pet
        </button>
      </div>
      <PetDataWithFilter />
    </>
  );
};

export default PetManagement;
