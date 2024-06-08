import { useAddPetMutation } from "@/redux/features/pets/pets.api";
import { TPet } from "@/types/pets.type";
import { Col, Form, Input, Modal, Row, Select } from "antd";
import React, { Dispatch } from "react";
import { toast } from "sonner";

export type TPetInventoryProps = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  pet?: TPet;
};

const AddPetModal = ({ open, setOpen }: TPetInventoryProps) => {
  const [addPet] = useAddPetMutation();
  const [form] = Form.useForm();

  const onSubmit = async (data: TPet) => {
    const tostId = toast.loading("Pet Adding...");
    console.log("data---=> ", data);

    data.age = Number(data.age);

    try {
      const res = await addPet(data).unwrap();

      res && toast.success("Pet Added", { id: tostId, duration: 2000 });
      form.resetFields();
      setOpen(false);
    } catch (error) {
      toast.error("something went wrong", { id: tostId, duration: 2000 });
    }
  };

  return (
    <Modal
      title="Add new Pet"
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={750}
    >
      <Row>
        <Col span={24}>
          <Form form={form} layout="vertical" onFinish={onSubmit}>
            <Row gutter={8}>
              <Col span={24}>
                <Form.Item
                  name="name"
                  label="Pet Name"
                  rules={[
                    { required: true, message: "Please enter the pet name" },
                  ]}
                >
                  <Input
                    placeholder="Enter Name"
                    autoComplete="off"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={24}>
                <Form.Item
                  name="photo"
                  label="Photo URL"
                  rules={[
                    { required: true, message: "Please enter the photo URL" },
                  ]}
                >
                  <Input
                    placeholder="Enter Photo URL"
                    autoComplete="off"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="species"
                  label="Species"
                  rules={[
                    { required: true, message: "Please enter the species" },
                  ]}
                >
                  <Input
                    placeholder="Enter Species"
                    autoComplete="off"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="breed"
                  label="Breed"
                  rules={[
                    { required: true, message: "Please enter the breed" },
                  ]}
                >
                  <Input
                    placeholder="Enter Breed"
                    autoComplete="off"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="age"
                  label="Age"
                  rules={[{ required: true, message: "Please enter the age" }]}
                >
                  <Input
                    placeholder="Enter Age"
                    type="number"
                    autoComplete="off"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="size"
                  label="Size"
                  rules={[
                    { required: true, message: "Please select the size" },
                  ]}
                >
                  <Select
                    placeholder="Select Size"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  >
                    <Select.Option value="Small">Small</Select.Option>
                    <Select.Option value="Medium">Medium</Select.Option>
                    <Select.Option value="Large">Large</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    { required: true, message: "Please select the gender" },
                  ]}
                >
                  <Select
                    placeholder="Select Gender"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  >
                    <Select.Option value="MALE">MALE</Select.Option>
                    <Select.Option value="FEMALE">FEMALE</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="specialNeeds"
                  label="Special Needs"
                  rules={[
                    {
                      required: true,
                      message: "Please enter any special needs",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter Special Needs"
                    autoComplete="off"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={24}>
                <Form.Item
                  name="location"
                  label="Location"
                  rules={[
                    { required: true, message: "Please enter the location" },
                  ]}
                >
                  <Input
                    placeholder="Enter Location"
                    autoComplete="off"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    { required: true, message: "Please enter a description" },
                  ]}
                >
                  <Input.TextArea
                    placeholder="Enter Description"
                    autoComplete="off"
                    className="border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="temperament"
                  label="Temperament"
                  rules={[
                    { required: true, message: "Please enter the temperament" },
                  ]}
                >
                  <Input
                    placeholder="Enter Temperament"
                    autoComplete="off"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="medicalHistory"
                  label="Medical History"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the medical history",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter Medical History"
                    autoComplete="off"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="helthStatus"
                  label="Health Status"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the health status",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter Health Status"
                    autoComplete="off"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="adoptionRequirements"
                  label="Adoption Requirements"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the adoption requirements",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter Adoption Requirements"
                    autoComplete="off"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <div className="flex items-center justify-end w-full mb-2">
                <div className="flex items-center gap-2">
                  <h1
                    className="cursor-pointer border px-4 py-1.5 font-medium rounded-lg"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </h1>
                  <button
                    className="cursor-pointer hover:bg-gray-950 px-4 py-1.5 bg-primary font-medium text-white rounded-lg"
                    type="submit"
                  >
                    Add Pet
                  </button>
                </div>
              </div>
            </Row>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
};

export default AddPetModal;
