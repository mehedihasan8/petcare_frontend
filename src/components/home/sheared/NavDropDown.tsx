/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Dropdown, MenuProps } from "antd";
import Image from "next/image";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import userAvatar from "../../../../public/petcare-photo.jpg";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { useGetMeQuery } from "@/redux/features/user/user.api";

const NavDropDown = () => {
  const dispatch = useAppDispatch();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { data: user } = useGetMeQuery(undefined);

  console.log("data from drop---=>", user);

  const handleDropdownVisibleChange = (visible: any) => {
    setDropdownVisible(visible);
  };

  const handelLogOut = async () => {
    dispatch(logout());
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Link href="/my-profile">
          <div className="p-2 flex items-center !w-[235px]">
            <Image
              src={userAvatar}
              width={40}
              height={40}
              alt="Profile"
              className="w-[40px] h-[40px] object-cover rounded-full"
            />
            <div className="ml-4">
              <h2 className="text-sm text-primary font-semibold">
                {user?.data?.name}
              </h2>
              <p className="text-sm whitespace-normal text-wrap break-words ">
                {user?.data?.email}
              </p>
            </div>
          </div>
        </Link>
      ),
      key: "profile",
    },
    {
      type: "divider",
    },
    {
      label: (
        <h2
          // onClick={() => handelLogOut()}
          className="p-2 flex items-center gap-2 text-base text-secondary !w-[235px]"
        >
          <FiLogOut className="text-secondary pt-[1px] w-[1.1rem] h-[1.1rem]" />{" "}
          Logout
        </h2>
      ),
      key: "logout",
      onClick: handelLogOut,
    },
  ];

  // if (isLoading) {
  //   return null;
  // }

  return (
    <Dropdown
      visible={dropdownVisible}
      onVisibleChange={handleDropdownVisibleChange}
      menu={{ items }}
      trigger={["click"]}
    >
      <a className="" onClick={(e) => e.preventDefault()}>
        <div className="flex items-center justify-end">
          {/* <IoIosNotificationsOutline className="w-8 h-8 text-secondary" /> */}
          <Image
            src={userAvatar}
            alt="Profile"
            width={32}
            height={32}
            className="w-[32px] h-[32px] object-cover rounded-full mr-3"
          />
          <h2 className="text-sm text-secondary mr-2">{user?.data?.name}</h2>
          {dropdownVisible ? (
            <LiaAngleUpSolid className="w-4 h-4 text-primary" />
          ) : (
            <LiaAngleDownSolid className="w-4 h-4 text-primary" />
          )}
        </div>
      </a>
    </Dropdown>
  );
};

export default NavDropDown;
