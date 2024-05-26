import LoginFrom from "@/components/auth/LoginForm";
import Link from "next/link";
import React from "react";
import { MdPets } from "react-icons/md";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center ">
          <h1 className="flex items-center gap-1 text-3xl font-extrabold text-primaryColor cursor-pointer">
            <MdPets className="text-primary" />
            <h4 className="text-secondary">
              Pet <span className="text-primary">C</span>are
            </h4>
          </h1>
        </div>
        <h2 className=" text-center text-3xl leading-9 font-semibold text-secondary">
          Log in to your account
        </h2>
        <p className="text-[#475467] text-center py-2">
          Welcome back! Please enter your details.
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 sm:px-10">
          <LoginFrom />
          <p className="mt-4 text-center text-sm leading-5 max-w">
            <Link
              href="/registration"
              className="font-medium text-[#475467] focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Don’t have an account?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;