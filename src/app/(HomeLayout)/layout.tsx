import Footer from "@/components/home/sheared/Footer";
import NavBar from "@/components/home/sheared/NavBar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
