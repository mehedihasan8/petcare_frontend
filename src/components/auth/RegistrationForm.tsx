"use client";
import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    console.log("Registering user---=>", data);

    // const toastId = toast.loading("Registering user...");
    // const useObject = {
    //   email: data?.email,
    //   password: data?.password,
    //   confirmPassword: data?.confirmPassword,
    // };

    // try {
    //   setIsLoading(true);

    //   await axios.post("/api/v1/user/auth/register", useObject);

    //   toast.success("Successfully registered!", { id: toastId });

    //   router.push("/");
    //   setIsLoading(false);
    // } catch (error) {
    //   toast.error(error?.response?.data?.message, { id: toastId });
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <Form onFinish={onSubmit} layout="vertical" autoComplete="off">
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
        <Input placeholder="Enter your email" autoComplete="new-email" />
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
          autoComplete="new-password"
          placeholder="Enter your password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
        ]}
      >
        <Input.Password
          placeholder="Confirm your password"
          autoComplete="new-password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      <Form.Item>
        <Checkbox>Remember for 30 days</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={isLoading}>
          {isLoading ? "Loading..." : "Register"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
