import { TPet } from "@/types/pets.type";
import { Col, Form, Input, Modal, Row, Select } from "antd";
import React from "react";
import { toast } from "sonner";
import { TPetInventoryProps } from "./AddPetModal";
import { useUpdateSinglePetMutation } from "@/redux/features/pets/pets.api";

const UpdatePetModal = ({ open, setOpen, pet }: TPetInventoryProps) => {
  const [updateSinglePet] = useUpdateSinglePetMutation();
  const [form] = Form.useForm();

  const onSubmit = async (data: TPet) => {
    const tostId = toast.loading("Pet Updating...");

    data.age ? (data.age = Number(data.age)) : null;

    const updatedData = {
      id: pet?.id,
      data,
    };

    try {
      const res = await updateSinglePet(updatedData).unwrap();

      res && toast.success("Pet Updated", { id: tostId, duration: 2000 });
      form.resetFields();
      setOpen(false);
    } catch (error) {
      console.log("error---==>", error);

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
      width={780}
    >
      <div>
        <Row>
          <Col span={24}>
            <Form initialValues={pet} layout="vertical" onFinish={onSubmit}>
              <Row gutter={8}>
                <Col span={24}>
                  <Form.Item name="name" label="Pet Name">
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
                  <Form.Item name="photo" label="Photo URL">
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
                  <Form.Item name="species" label="Species">
                    <Input
                      placeholder="Enter Species"
                      autoComplete="off"
                      className="h-10 border border-[#C4CAD4] rounded-lg"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="breed" label="Breed">
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
                  <Form.Item name="age" label="Age">
                    <Input
                      placeholder="Enter Age"
                      type="number"
                      autoComplete="off"
                      className="h-10 border border-[#C4CAD4] rounded-lg"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="size" label="Size">
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
                  <Form.Item name="gender" label="Gender">
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
                  <Form.Item name="specialNeeds" label="Special Needs">
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
                  <Form.Item name="location" label="Location">
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
                  <Form.Item name="description" label="Description">
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
                  <Form.Item name="temperament" label="Temperament">
                    <Input
                      placeholder="Enter Temperament"
                      autoComplete="off"
                      className="h-10 border border-[#C4CAD4] rounded-lg"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="medicalHistory" label="Medical History">
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
                  <Form.Item name="helthStatus" label="Health Status">
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
                      Update Pet
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

export default UpdatePetModal;
