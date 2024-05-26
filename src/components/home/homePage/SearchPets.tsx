"use client";
import { Form, Input, Select, Button } from "antd";

const { Option } = Select;

const SearchPets = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="p-6 border shadow-[0px_0px_20px_1px] shadow-[#3440541a] hover:shadow-[0px_0px_50px_1px] hover:shadow-[#3440541a] rounded-[10px] overflow-hidden">
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        className="max-w-[1000px] mx-auto items-center grid grid-cols-4 gap-3 *:!m-0"
      >
        <Form.Item name="text">
          <Input placeholder="Text Field" type="text" />
        </Form.Item>

        <Form.Item name="select1">
          <Select placeholder="Select Field 1">
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
          </Select>
        </Form.Item>

        <Form.Item name="select2">
          <Select placeholder="Select Field 2">
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button
            className="hover:!bg-secondary !bg-primary"
            type="primary"
            htmlType="submit"
            block
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SearchPets;
