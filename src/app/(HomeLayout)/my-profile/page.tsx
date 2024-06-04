"use client";
import { Button, Spin, Tabs, Tag } from "antd";
import React from "react";
import { FiEdit3 } from "react-icons/fi";
import banner from "/public/Image-wrap.png";
import photo from "../../../../public/petcare-photo.jpg";
import Image from "next/image";
import { useGetMeQuery } from "@/redux/features/user/user.api";
import ChangePassword from "./ChangePassword";
import EditInformation from "./EditInformation";

const MyProfile = () => {
  const { data: user, isFetching } = useGetMeQuery(undefined);

  const items = [
    {
      key: "1",
      label: "Edit Information",
      children: <EditInformation user={user?.data} />,
    },
    {
      key: "2",
      label: "Change Password",
      children: <ChangePassword />,
    },
  ];

  if (isFetching) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
        <Spin size="large" />
      </div>
    );
  }

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
        <div className="flex items-center justify-center border-b-2 pb-4">
          <h2 className="text-2xl font-semibold text-center">
            Personal Information
          </h2>
        </div>
        <div className="mt-5">
          <Tabs defaultActiveKey="1" type="card" items={items} />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
