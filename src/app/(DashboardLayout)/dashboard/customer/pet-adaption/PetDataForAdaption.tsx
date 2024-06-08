"use client";
import { useGetAllPetsQuery } from "@/redux/features/pets/pets.api";
import { TPet } from "@/types/pets.type";
import { Image, Input, Pagination, Table, TableProps } from "antd";
import React, { useState } from "react";
import { TQueryParam } from "@/types/global.type";
import SearchPets from "@/components/home/homePage/SearchPets";
import AdaptionRequestModal from "./AdaptionRequestModal";

const PetDataForAdaption = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const { data, isFetching } = useGetAllPetsQuery(params);

  const pets: TPet[] = data?.data?.data;
  const meta = data?.data?.meta;

  const [open, setOpen] = useState(false);
  const [pet, setPet] = useState<TPet | undefined>(undefined);

  const handlePaginationChange = (page: number) => {
    setParams((prevParams) => [
      ...prevParams.filter((param) => param.name !== "page"),
      { name: "page", value: page },
    ]);
  };

  const petsColumns: TableProps<TPet>["columns"] = [
    {
      title: "Pet Name",
      key: "name",
      render: (record: TPet) => (
        <div className="flex items-center gap-2">
          <Image
            className="!w-12 !h-12 rounded-full"
            src={record.photo}
            alt="image"
          />
          <div>
            <h4 className="font-medium">{record.name}</h4>
            <p className="line-clamp-1">{record.breed}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "helthStatus",
    },
    {
      title: "Age",
      key: "age",
      dataIndex: "age",
    },
    {
      title: "Species",
      key: "species",
      dataIndex: "species",
    },
    {
      title: "Size",
      key: "size",
      dataIndex: "size",
    },
    {
      title: "Temperament",
      key: "temperament",
      dataIndex: "temperament",
    },
    {
      title: "Location",
      key: "location",
      dataIndex: "location",
    },
    {
      title: "Gender",
      key: "gender",
      dataIndex: "gender",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      fixed: "right",
      render: (pet: TPet) => (
        <div className="flex items-center gap-2">
          <button
            className="px-4 py-1.5 bg-white border-[1.5px] rounded-lg hover:bg-secondary hover:text-white"
            onClick={() => {
              setPet(pet);
              setOpen(true);
            }}
          >
            Adoption Request
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <AdaptionRequestModal open={open} setOpen={setOpen} pet={pet} />
      {/* <div className="w-96">
        <Input
          type="primary"
          prefix={<IoSearchOutline />}
          placeholder="Search"
          className="focus:placeholder:!text-blue-500"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div> */}
      <div className="px-2 pb-5">
        <SearchPets setParams={setParams} />
      </div>
      <Table
        columns={petsColumns}
        dataSource={pets}
        scroll={{ x: "max-content" }}
        tableLayout="fixed"
        loading={isFetching}
        pagination={false}
        className="w-[98%] border mx-auto rounded text-center"
      />
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

export default PetDataForAdaption;
