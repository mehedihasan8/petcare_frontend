"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { Button } from "antd";
import { GrClose } from "react-icons/gr";
import NavDropDown from "./NavDropDown";
import NavSearchBar from "./NavSearchBar";
import { useGetMeQuery } from "@/redux/features/user/user.api";

const NavBar = () => {
  // const user = useAppSelector(selectCurrentUser);
  const { data: user } = useGetMeQuery(undefined);
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);

  // const isHomePage = window.location.pathname === "/";

  // console.log("user is exist:----=>", user);

  return (
    <div
      className={`flex justify-between items-center px-5 py-2 backdrop-blur-sm z-10 md:sticky w-full top-0`}
      // isHomePage ? "md:fixed" : "md:sticky"
    >
      <Link href="/">
        <h1 className="flex items-center gap-1 text-3xl font-extrabold text-primaryColor cursor-pointer">
          <MdPets className="text-primary" />
          <h4 className="text-secondary">
            Pet <span className="text-primary">C</span>are
          </h4>
        </h1>
      </Link>
      <NavSearchBar />
      <div className="md:flex items-center justify-between w-2/4 hidden">
        <ul className="flex items-center gap-4 ">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about-us"}>
            <li>About</li>
          </Link>
          <Link href={"/pet-adaption"}>
            <li>Adaption Request</li>
          </Link>
        </ul>
        {user?.data ? (
          <NavDropDown user={user?.data} />
        ) : (
          <div className="flex items-center gap-3">
            <Link href={"/login"}>
              <Button className="!bg-transparent !border !border-secondary !text-secondary hover:!bg-secondary hover:!text-white">
                login
              </Button>
            </Link>
            <Link href={"/registration"}>
              <Button className="!bg-transparent !border !border-secondary !text-secondary hover:!bg-primary hover:!border-primary hover:!text-white">
                Registration
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* mobil device  */}
      <FaBars
        onClick={() => setIsSidebarMenuOpen(true)}
        fontSize={28}
        className="cursor-pointer primary-color md:hidden"
      />
      <div
        className={`fixed h-full w-screen md:hidden bg-black/20 top-0 right-0 z-[999] -translate-x-full transition-transform ${
          isSidebarMenuOpen && "translate-x-0"
        }`}
      >
        <div className="text-white bg-[#121316] flex-col absolute left-0 top-0 h-screen p-6 gap-8 z-[999] min-w-[70%] flex">
          <div className="flex items-center gap-1">
            <GrClose
              onClick={() => setIsSidebarMenuOpen(false)}
              fontSize={50}
              className="font-bold primary-color cursor-pointer text-white "
            />

            <div className="bg-gray-300 h-1 w-full"></div>
          </div>

          <ul className="pl-11">
            <li onClick={() => setIsSidebarMenuOpen(false)} className="text-xl">
              <Link
                href={"/"}
                className={`flex items-center gap-3 font-semibold mb-8 text-sm`}
              >
                <FaUserAlt fontSize={20} className="primary-color" />
                profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
