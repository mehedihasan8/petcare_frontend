"use client";
import { Col, Form, Input, Modal, Row } from "antd";
import React, { useEffect } from "react";
import { toast } from "sonner";
import { TPetInventoryProps } from "../../admin/pet-management/AddPetModal";
import { useGetMeQuery } from "@/redux/features/user/user.api";
import { useAddAdaptionRequestMutation } from "@/redux/features/adaption/adaption.api";

const AdaptionRequestModal = ({ open, setOpen, pet }: TPetInventoryProps) => {
  const { data: user } = useGetMeQuery(undefined);
  const [addAdaptionRequest] = useAddAdaptionRequestMutation();
  const [form] = Form.useForm();

  const onSubmit = async (data: Record<string, string>) => {
    console.log("data----=/>", data);

    const tostId = toast.loading("Adaption Request...");
    const adaptionData: Record<string, string> = {
      petId: pet?.id as string,
    };

    if (data.petOwnershipExperience) {
      adaptionData.petOwnershipExperience = data.petOwnershipExperience;
    }

    try {
      const res = await addAdaptionRequest(adaptionData).unwrap();
      res &&
        toast.success("Adaption Request Success", {
          id: tostId,
          duration: 2000,
        });
      form.resetFields();
      setOpen(false);
    } catch (error: any) {
      console.log("error---==>", error);
      toast.error(error?.data?.message, { id: tostId, duration: 2000 });
    }
  };

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(pet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pet]);

  // if (pet && Object.keys(pet).length < 0) {
  //   return <p>loading..........</p>;
  // }

  return (
    <Modal
      title="Adoption Request"
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={780}
    >
      <div>
        <Row>
          <Col span={24}>
            <Form
              form={form}
              initialValues={pet}
              layout="vertical"
              onFinish={onSubmit}
            >
              <Row gutter={8}>
                <Col span={24}>
                  <Form.Item label="Your Email">
                    <Input
                      value={user?.data?.email}
                      autoComplete="off"
                      className="h-10 border border-[#C4CAD4] rounded-lg cursor-not-allowed"
                      //   disabled={true}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={8}>
                <Col span={24}>
                  <Form.Item label="Pet Name">
                    <Input
                      value={pet?.name}
                      autoComplete="off"
                      className="h-10 border border-[#C4CAD4] rounded-lg cursor-not-allowed"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={8}>
                <Col span={24}>
                  <Form.Item
                    name="petOwnershipExperience"
                    label="Pet Ownership Experience"
                  >
                    <Input
                      placeholder="Enter Pet Ownership Experience"
                      autoComplete="off"
                      className="h-10 border border-[#C4CAD4] rounded-lg"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <div className="flex items-center justify-end w-full mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="cursor-pointer border px-4 py-1.5 font-medium rounded-lg"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </span>
                    <button
                      className="cursor-pointer hover:bg-gray-950 px-4 py-1.5 bg-primary font-medium text-white rounded-lg"
                      type="submit"
                    >
                      Adapt Request
                    </button>
                  </div>
                </div>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default AdaptionRequestModal;
