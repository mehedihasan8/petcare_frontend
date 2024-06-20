"use client";
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  Upload,
  message,
  Image,
} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { GoUpload } from "react-icons/go";
import { TRegister } from "@/types/auth.type";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

const RegistrationForm = () => {
  const router = useRouter();
  const [register] = useRegisterMutation();

  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");

  const onSubmit = async (data: TRegister) => {
    const toastId = toast.loading("Registering user...");

    let userObject: TRegister = {
      name: data?.name,
      email: data?.email,
      password: data?.password,
    };

    if (image) {
      userObject.photo = image;
    }

    try {
      setIsLoading(true);

      const res = await register(userObject).unwrap();

      console.log("res---=>", res);

      toast.success("Successfully registered!", {
        id: toastId,
      });

      router.push("/login");
      setIsLoading(false);
    } catch (error) {
      console.log("error---=>", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (options: any) => {
    const { onSuccess, onError, file } = options;
    const formData = new FormData();
    formData.append("image", file);

    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=ead29cbef0bff96497069a3c95ca92e7",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();

      if (data.success) {
        message.success(`${file.name} file uploaded successfully.`);
        console.log("Image URL:---=>", data.data.url);
        onSuccess(data.data.url);
        setImage(data.data.url);
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      message.error(`${file.name} file upload failed.`);
      console.error("Upload Error:--=>", error);
      onError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form form={form} onFinish={onSubmit} layout="vertical" autoComplete="off">
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input placeholder="Enter your name" autoComplete="new-name" />
      </Form.Item>

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

      {/* <Form.Item label="Role" name="role">
        <Select placeholder="Select your role">
          <Select.Option value="ADMIN">Admin</Select.Option>
          <Select.Option value="CUSTOMER">Customer</Select.Option>
        </Select>
      </Form.Item> */}

      <Form.Item label="Profile Picture">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Upload
            name="profile"
            listType="picture"
            className="upload-list-inline"
            showUploadList={false}
            customRequest={handleImageUpload}
          >
            <Button icon={<GoUpload />}>Upload Profile Picture</Button>
          </Upload>
          {image && (
            <Image
              src={image}
              alt="Uploaded Profile"
              style={{
                marginLeft: 16,
                width: 85,
                height: 85,
                borderRadius: "100%",
              }}
            />
          )}
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
          {isLoading ? "Loading..." : "Register"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
