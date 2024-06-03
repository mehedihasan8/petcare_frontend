"use client";
import { Button, Tag } from "antd";
import React from "react";
import { FiEdit3 } from "react-icons/fi";
import banner from "/public/Image-wrap.png";
import photo from "../../../../public/petcare-photo.jpg";
import Image from "next/image";

const MyProfile = () => {
  const items = [
    {
      title: "Total Transactions",
      quantity: `100`,
    },
    {
      title: "Total spend",
      quantity: `1000`,
    },
    {
      title: "Total Points",
      quantity: `188`,
    },
  ];
  return (
    <div className="w-[85%] mx-auto pt-10 pb-12">
      <div className="p-4">
        <div>
          <Image
            className="w-full h-[200px] object-cover rounded-2xl"
            src={banner}
            alt="banner"
          />
        </div>
        <div className="flex gap-4 items-center -m-[2.7rem] w-full mx-auto px-4">
          <div className="relative h-[170px] w-[170px] rounded-full">
            <Image
              className="w-full h-full rounded-full object-cover"
              src={photo}
              width={250}
              height={200}
              alt={"image"}
            />
            {/* <ProfilePictureAction
              customerId={customerId}
              setRefetch={setRefetch}
            /> */}
          </div>
          <div className="mt-5">
            <h2 className="text-2xl font-semibold">
              {/* {singleCustomersData?.firstName}
              {singleCustomersData?.lastName} */}
              Abdul Halim Khan
            </h2>
            <div className="flex items-center gap-4 mt-2">
              <Tag bordered={false} color="cyan">
                MAESTRIA
              </Tag>
              <p>EXP: 15/04/2025</p>
            </div>
          </div>
          {/* <CardAction /> */}
        </div>
      </div>

      <div className="flex items-center gap-4 p-4 mt-8">
        {items?.map((item, index) => (
          <div
            key={index}
            className="py-5 px-4 rounded-xl bg-white border w-full"
          >
            <p className="text-sm font-medium text-[#475467]">{item.title}</p>
            <h4 className="text-3xl font-semibold  text-primary">
              {item.quantity}
            </h4>
          </div>
        ))}
      </div>

      <div className="px-4 mt-5">
        <div className="flex items-center justify-between border-b-2 pb-4">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <Button
            // onClick={}

            icon={<FiEdit3 size={12} />}
          >
            Edit
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-5 mb-6 p-4 rounded-lg border">
          <div>
            <h4 className="font-semibold">Email</h4>
            <p>jahid2@gmail.com</p>
          </div>
          <div>
            <h4 className="font-semibold">Phone Number</h4>
            <p>01758633</p>
          </div>
          <div>
            <h4 className="font-semibold">Date of Birth</h4>

            <p>2-12-2003</p>
          </div>
          <div>
            <h4 className="font-semibold">Gender</h4>
            <p className="uppercase">Male</p>
          </div>
          <div className="col-span-2">
            <h4 className="font-semibold">Location</h4>
            <p>Briad adfa asdfadf</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
