"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdPets } from "react-icons/md";

// Ant Design Component
import { Layout, Menu, Spin } from "antd";
import NavDropDown from "../home/sheared/NavDropDown";
import { useGetMeQuery } from "@/redux/features/user/user.api";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { sidebarMenuItems } from "./SidebarMenu";
const { Header, Content, Sider } = Layout;

const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  const { data: userData } = useGetMeQuery(undefined);
  const token = useAppSelector(useCurrentToken);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (token) {
      const verifiedUser = verifyToken(token);
      setUser(verifiedUser);
    }
  }, [token]);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
        <Spin size="large" />
      </div>
    );
  }

  let sidebarItems: any = [];
  if (user?.role === "ADMIN") {
    sidebarItems = sidebarMenuItems.admin;
  }
  if (user?.role === "CUSTOMER") {
    sidebarItems = sidebarMenuItems.customer;
  }

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
          <div className="flex items-center gap-1 text-3xl font-extrabold text-primaryColor cursor-pointer pl-[22px] py-2">
            <MdPets className="text-primary" />
            <h4 className="text-secondary">
              Pet <span className="text-primary">C</span>are
            </h4>
          </div>
        </Link>

        <Menu
          mode="inline"
          theme="light"
          items={sidebarItems}
          className="!min-h-[calc(100vh-60px)] !pt-2"
        />
      </Sider>

      <Layout>
        <Header className="!px-4 sticky top-0 !bg-white !h-[60px] flex flex-col justify-center text-right border-b z-50">
          <div className="flex flex-col items-center ms-auto text-right">
            <NavDropDown user={userData?.data} />
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
