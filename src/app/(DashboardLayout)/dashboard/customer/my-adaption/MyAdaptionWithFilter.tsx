"use client";
import { TPet } from "@/types/pets.type";
import { Image, Pagination, Table, TableProps } from "antd";
import React, { useState } from "react";
import { TQueryParam } from "@/types/global.type";
import { useMyAdoptionRequestQuery } from "@/redux/features/adaption/adaption.api";

const MyAdaptionWithFilter = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const { data, isFetching } = useMyAdoptionRequestQuery(params);

  const pets: TPet[] = data?.data?.data;
  const meta = data?.data?.meta;

  const handlePaginationChange = (page: number) => {
    setParams((prevParams) => [
      ...prevParams.filter((param) => param.name !== "page"),
      { name: "page", value: page },
    ]);
  };

  const petsColumns: TableProps<TPet>["columns"] = [
    {
      title: "Name",
      key: "name",
      render: (record) => (
        <div className="flex items-center gap-2 ">
          <Image
            className="!w-12 !h-12 rounded-full"
            src={record?.pet?.photo}
            alt="image"
          />
          <div>
            <h4 className="font-medium">{record?.pet?.name}</h4>
            <p className="line-clamp-1">{record?.pet?.breed}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Age",
      key: "age",
      render: (record) => <p className="">{record?.pet?.age}</p>,
    },
    {
      title: "Species",
      key: "species",
      render: (record) => <p className="">{record?.pet?.species}</p>,
    },
    {
      title: "Size",
      key: "size",
      render: (record) => <p className="">{record?.pet?.size}</p>,
    },
    {
      title: "Temperament",
      key: "temperament",
      render: (record) => <p className="">{record?.pet?.temperament}</p>,
    },
    {
      title: "Gender",
      key: "gender",
      render: (record) => <p className="">{record?.pet?.gender}</p>,
    },
    {
      title: "Status",
      key: "status",
      render: (record: any) => {
        return (
          <div className="border border-[#E1E4EA] rounded-md py-0.5 px-2 capitalize text-xs font-medium text-secondary">
            <span
              className={`w-1.5 h-1.5 rounded-full inline-block mr-1 mb-0.5 ${
                record?.status === "APPROVED" ? "bg-teal-600" : "bg-red-500"
              }`}
            ></span>
            {record?.status}
          </div>
        );
      },
    },
  ];

  return (
    <div>
      {/* <div className="w-96">
        <Input
          type="primary"
          prefix={<IoSearchOutline />}
          placeholder="Search"
          className="focus:placeholder:!text-blue-500"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div> */}
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

export default MyAdaptionWithFilter;
