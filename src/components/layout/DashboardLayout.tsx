"use client";
import React from "react";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineInventory2, MdPets } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

// Ant Design Component
import { Layout, Menu } from "antd";
import NavDropDown from "../home/sheared/NavDropDown";
const { Header, Content, Sider } = Layout;

const menuItems = [
  {
    key: 1,
    icon: <RxDashboard />,
    label: <Link href={"/"}>Dashboard</Link>,
  },
  {
    key: 2,
    icon: <MdOutlineInventory2 />,
    label: <Link href={"/customers"}>Customers</Link>,
  },
  {
    key: 3,
    icon: <CiSettings />,
    label: <Link href={"/stores"}>Store</Link>,
  },
];

const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        theme="light"
        collapsedWidth="0"
        style={{
          height: "100vh",
          position: "sticky",
          top: "0",
          left: "0",
        }}
        width={200}
      >
        <Link href="/">
          <h1 className="flex items-center gap-1 text-3xl font-extrabold text-primaryColor cursor-pointer pl-[22px] py-2">
            <MdPets className="text-primary" />
            <h4 className="text-secondary">
              Pet <span className="text-primary">C</span>are
            </h4>
          </h1>
        </Link>

        <Menu
          mode="inline"
          theme="light"
          items={menuItems}
          className="!min-h-[calc(100vh-60px)]"
        />
      </Sider>

      <Layout>
        <Header className="!px-4 sticky top-0 !bg-white !h-[60px] flex flex-col justify-center text-right border-b z-50">
          <div className="flex flex-col items-center ms-auto text-right">
            <NavDropDown />
          </div>
        </Header>
        <Content>
          <div
            style={{
              minHeight: "calc(100vh - 60px)",
              backgroundColor: "white",
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
