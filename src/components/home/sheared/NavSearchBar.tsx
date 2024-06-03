"use client";
import { Input } from "antd";
import React, { useState } from "react";
import { Dropdown, MenuProps } from "antd";
import userAvatar from "../../../../public/petcare-photo.jpg";
import Link from "next/link";
import Image from "next/image";

const NavSearchBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleDropdownVisibleChange = (visible: any) => {
    setDropdownVisible(visible);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Link href="/my-profile">
          <div className="p-2 flex items-center !w-[450px]">
            <Image
              src={userAvatar}
              width={40}
              height={40}
              alt="Profile"
              className="w-[60px] h-[60px] object-cover rounded-lg"
            />
            <div className="ml-4">
              <h2 className="text-sm text-primary font-semibold">
                Md Jahid Morol
              </h2>
              <p className="text-sm whitespace-normal text-wrap break-words ">
                jahidmorol2@gmail.com
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
  ];

  return (
    <div>
      <Dropdown
        visible={dropdownVisible}
        onVisibleChange={handleDropdownVisibleChange}
        menu={{ items }}
        trigger={["click"]}
      >
        <a className="inline-block" onChange={(e) => e.preventDefault()}>
          <Input
            type="primary"
            placeholder="Search"
            className="focus:placeholder:!text-primary !bg-transparent !border !border-secondary "
            onChange={(e) => setSearchText(e.target.value)}
          />
        </a>
      </Dropdown>
    </div>
  );
};

export default NavSearchBar;
