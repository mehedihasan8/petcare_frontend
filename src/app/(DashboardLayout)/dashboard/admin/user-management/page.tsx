"use client";
import {
  useGetAllUserQuery,
  useUpdateUserRoleMutation,
  useUpdateUserStatusMutation,
} from "@/redux/features/user/userMangement.api";
import { Dropdown, Image, MenuProps, Space, Table, TableProps } from "antd";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { toast } from "sonner";

const UserManagement = () => {
  const { data, isFetching } = useGetAllUserQuery(undefined);
  const [updateUserStatus] = useUpdateUserStatusMutation();
  const [updateUserRole] = useUpdateUserRoleMutation();

  const handleUpdateStatus = async (data: any, id: string) => {
    const tostId = toast.loading("Status Updating...");
    try {
      const payload = {
        id,
        data: { status: data?.key },
      };

      const res = await updateUserStatus(payload).unwrap();
      res && toast.success("Status Updated", { id: tostId, duration: 2000 });
    } catch (error) {
      toast.error("something went wrong", { id: tostId, duration: 2000 });
    }
  };

  const handleUpdateRole = async (data: any, id: string) => {
    const tostId = toast.loading("Role Updating...");
    try {
      const payload = {
        id,
        data: { role: data?.key },
      };

      const res = await updateUserRole(payload).unwrap();
      res && toast.success("Role Updated", { id: tostId, duration: 2000 });
    } catch (error) {
      toast.error("something went wrong", { id: tostId, duration: 2000 });
    }
  };

  const statusItems: MenuProps["items"] = [
    {
      label: (
        <div className="capitalize text-xs font-medium text-secondary">
          <span
            className={`w-1.5 h-1.5 rounded-full inline-block mr-1 mb-0.5 bg-teal-600`}
          ></span>
          ACTIVATE
        </div>
      ),
      key: "ACTIVATE",
    },
    {
      label: (
        <span className="capitalize text-xs font-medium text-secondary">
          <span
            className={`w-1.5 h-1.5 rounded-full inline-block mr-1 mb-0.5 bg-red-500`}
          ></span>
          DEACTIVATE
        </span>
      ),
      key: "DEACTIVATE",
    },
  ];

  const roleItems: MenuProps["items"] = [
    {
      label: (
        <div className="capitalize text-xs font-medium text-secondary">
          <span
            className={`w-1.5 h-1.5 rounded-full inline-block mr-1 mb-0.5 bg-primary`}
          ></span>
          ADMIN
        </div>
      ),
      key: "ADMIN",
    },
    {
      label: (
        <span className="capitalize text-xs font-medium text-secondary">
          <span
            className={`w-1.5 h-1.5 rounded-full inline-block mr-1 mb-0.5 bg-secondary`}
          ></span>
          CUSTOMER
        </span>
      ),
      key: "CUSTOMER",
    },
  ];

  const userColumn: TableProps<any>["columns"] = [
    {
      title: "Name",
      key: "name",
      render: (record) => (
        <div className="flex items-center gap-2 ">
          <Image
            className="!w-12 !h-12 rounded-full"
            src={record?.photo}
            alt="image"
          />
          <div>
            <h4 className="font-medium">{record?.name}</h4>
            <p className="line-clamp-1">{record?.email}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Status",
      key: "status",
      render: (record: any) => {
        return (
          <Dropdown
            menu={{
              items: statusItems,
              onClick: (data) => handleUpdateStatus(data, record?.id),
            }}
            trigger={["hover"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <div className="flex items-center justify-between border border-[#E1E4EA] rounded-md py-1 px-2 capitalize text-xs font-medium text-secondary max-w-40">
                <div>
                  <span
                    className={`w-2 h-2 rounded-full inline-block mr-2 ${
                      record?.status === "ACTIVATE"
                        ? "bg-teal-600"
                        : "bg-red-500"
                    }`}
                  ></span>
                  {record?.status}
                </div>

                <IoIosArrowDown />
              </div>
            </a>
          </Dropdown>
        );
      },
    },
    {
      title: "Role",
      key: "role",
      render: (record: any) => {
        return (
          <Dropdown
            menu={{
              items: roleItems,
              onClick: (data) => handleUpdateRole(data, record?.id),
            }}
            trigger={["hover"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <div className="max-w-40 flex items-center justify-between border border-[#E1E4EA] rounded-md py-1 px-2 capitalize text-xs font-medium text-secondary">
                <div>
                  <span
                    className={`w-2 h-2 rounded-full inline-block mr-2  ${
                      record?.role === "ADMIN" ? "bg-primary" : "bg-secondary"
                    }`}
                  ></span>
                  {record?.role}
                </div>

                <IoIosArrowDown />
              </div>
            </a>
          </Dropdown>
        );
      },
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold border-b-2 mb-4 text-center py-4">
        User Management
      </h2>
      <Table
        columns={userColumn}
        dataSource={data?.data}
        scroll={{ x: "max-content" }}
        tableLayout="fixed"
        loading={isFetching}
        pagination={false}
        className="w-[98%] border mx-auto rounded text-center"
      />
    </div>
  );
};

export default UserManagement;
