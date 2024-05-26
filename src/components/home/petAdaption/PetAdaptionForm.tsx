"use client";
import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PetAdaptionForm = () => {
  const router = useRouter();
  const defaultValue = {
    email: "jahidmorol2@gmail.com",
    password: "jahid00@11",
  };
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    console.log("onSubmit--=>", data);

    // const toastId = toast.loading("login admin...");
    // const useObject = {
    //   email: data?.email,
    //   password: data?.password,
    // };
    // try {
    //   setIsLoading(true);
    //   await axios.post("/api/v1/user/auth/login", useObject);
    //   toast.success("Successfully login admin!", { id: toastId });
    //   router.push("/");
    //   setIsLoading(false);
    // } catch (error) {
    //   toast.error(error?.response?.data?.message, { id: toastId });
    // } finally {
    //   setIsLoading(false);
    // }
  };
  return (
    <Form onFinish={onSubmit} initialValues={defaultValue} layout="vertical">
      <Form.Item
        label="Email address"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
            type: "email",
          },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          placeholder="Enter your password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      <Form.Item>
        <div className="flex justify-between items-center">
          <Checkbox>Remember for 30 days</Checkbox>
          <Link href="/login">
            <p className="text-[#00263E] font-medium">Forgot your password?</p>
          </Link>
        </div>
      </Form.Item>

      <Form.Item>
        <Button
          className="hover:!bg-secondary !bg-primary"
          type="primary"
          htmlType="submit"
          block
          loading={isLoading}
        >
          {isLoading ? "Loading..." : "Sign in"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PetAdaptionForm;
