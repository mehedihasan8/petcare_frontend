"use client";
import { Button, Tag } from "antd";
import React from "react";
import { FiEdit3 } from "react-icons/fi";
import banner from "/public/Image-wrap.png";
import photo from "../../../../public/petcare-photo.jpg";
import Image from "next/image";
import { useGetMeQuery } from "@/redux/features/user/user.api";

const MyProfile = () => {
  const { data: user, isFetching } = useGetMeQuery(undefined);

  console.log("user----=>", user);

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
          <div className="h-[170px] w-[170px] rounded-full">
            <Image
              className="w-full h-full rounded-full object-cover"
              src={user?.data?.photo || photo}
              width={250}
              height={200}
              alt={"image"}
            />
          </div>
          <div className="mt-5">
            <h2 className="text-2xl font-semibold">
              {user?.data?.name}{" "}
              <Tag bordered={false} color="orange">
                {user?.data?.role}
              </Tag>
            </h2>
            <div className="flex items-center gap-4 mt-2">
              <p>{user?.data?.email}</p>
            </div>
          </div>
          {/* <CardAction /> */}
          <Button
            // onClick={}
            className="ml-auto"
            icon={<FiEdit3 size={12} />}
          >
            Edit
          </Button>
        </div>
      </div>

      <div className="px-4 mt-16">
        <div className="flex items-center justify-between border-b-2 pb-4">
          <h2 className="text-lg font-semibold">Personal Information</h2>
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
