"use client";
import { useUpdateUserInformationMutation } from "@/redux/features/user/user.api";
import { Col, Form, Input, Row } from "antd";
import { useState } from "react";
import { toast } from "sonner";

export type TEditInformation = {
  name: string;
  email: string;
};

export type TUserInformation = {
  id: string;
  role: string;
  photo: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

const EditInformation = ({ user }: { user: TUserInformation }) => {
  const [updateUserInformation] = useUpdateUserInformationMutation();
  const [email, setEmail] = useState("");

  const handelPasswordChange = async (data: TEditInformation) => {
    const toastId = await toast.loading("Information changing...");

    console.log("data Information---=>", data);

    try {
      let editedInformation: Record<string, string> = {
        name: data?.name || user?.name,
      };

      if (email) {
        editedInformation.email = data?.email;
      }

      console.log("email onchange---=>", email);

      console.log("editedInformation --=>", editedInformation);

      const res = await updateUserInformation(editedInformation).unwrap();
      setEmail("");
      await toast.success("Information change successfully!", { id: toastId });
    } catch (error: any) {
      console.log("data Information error---=>", error);
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  return (
    <Row className="w-full flex flex-col gap-2 md:gap-5">
      <Col span={24}>
        <Form
          initialValues={user}
          onFinish={handelPasswordChange}
          layout="vertical"
          className="flex justify-between w-full"
        >
          <div className="w-[50%]">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item name="name" label="Name">
                  <Input
                    placeholder="Enter Name"
                    autoComplete="off"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item name="email" label="Email">
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    autoComplete="off"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
          </div>
          <div className="mt-auto">
            <Form.Item>
              <div className="flex items-center justify-end gap-3 mt-6">
                <button
                  type="button"
                  className="px-5 py-1.5 bg-white border-[1.5px] rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex justify-center py-1.5 px-16 border border-transparent text-sm rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:bg-primary focus:shadow-outline-indigo active:bg-primary font-semibold"
                >
                  Save
                </button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default EditInformation;
