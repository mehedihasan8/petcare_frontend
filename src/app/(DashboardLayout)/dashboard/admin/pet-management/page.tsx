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
      <div className="flex items-center justify-between p-2 mb-4 border-b-2">
        <h2 className="text-2xl font-bold">Pet Management</h2>
        <AddPetModal open={open} setOpen={setOpen} />
        <Button onClick={modalOpen} icon={<FaPlus size={12} />}>
          Add New Pet
        </Button>
      </div>
      <PetDataWithFilter />
    </>
  );
};

export default PetManagement;
