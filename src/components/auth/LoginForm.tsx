"use client";
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { verifyToken } from "@/utils/verifyToken";
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";

const LoginFrom = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const defaultValue = {
    email: "jahidmorol3@gmail.com",
    password: "jahid00@11",
  };

  const onSubmit = async (data: any) => {
    const tostId = toast.loading("Logging In");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.token) as TUser;

      dispatch(setUser({ user: user, token: res?.data?.token }));
      toast.success("Logged In", { id: tostId, duration: 2000 });
      if (user.role === "ADMIN") {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    } catch (error) {
      toast.error("something went wrong", { id: tostId, duration: 2000 });
    }
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

export default LoginFrom;
