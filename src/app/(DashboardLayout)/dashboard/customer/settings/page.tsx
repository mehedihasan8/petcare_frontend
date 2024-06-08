"use client";
import ChangePassword from "@/app/(HomeLayout)/my-profile/ChangePassword";
import EditInformation from "@/app/(HomeLayout)/my-profile/EditInformation";
import { useGetMeQuery } from "@/redux/features/user/user.api";
import { Spin, Tabs } from "antd";
import React from "react";

const SettingCustomer = () => {
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
    <div className="px-4 pt-2">
      <div className="flex items-center justify-center border-b-2 pb-4">
        <h2 className="text-2xl font-semibold text-center">
          Personal Information
        </h2>
      </div>
      <div className="mt-5 px-10">
        <Tabs defaultActiveKey="1" type="card" items={items} />
      </div>
    </div>
  );
};

export default SettingCustomer;
