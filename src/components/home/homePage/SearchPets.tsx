"use client";
import { TQueryParam } from "@/types/global.type";
import { Form, Input, Select, Button } from "antd";
import { useState } from "react";

const { Option } = Select;

type SearchPetsProps = {
  setParams: React.Dispatch<React.SetStateAction<TQueryParam[] | undefined>>;
};

const SearchPets = ({ setParams }: SearchPetsProps) => {
  // const [searchTerm, setSearchTerm] = useState("");

  // console.log("searchTerm--=>", searchTerm);

  const onFinish = (values: any) => {
    console.log("Success:", values);

    const newParams: TQueryParam[] = [];

    // if (searchTerm) {
    //   newParams.push({ name: "searchTerm", value: searchTerm });
    // }

    if (values.size !== undefined) {
      newParams.push({ name: "size", value: values.size });
    }
    if (values.select1 !== undefined) {
      newParams.push({ name: "select1", value: values.select1 });
    }
    if (values.select2 !== undefined) {
      newParams.push({ name: "select2", value: values.select2 });
    }

    setParams(newParams);
  };

  return (
    <div className="p-6 border shadow-[0px_0px_20px_1px] shadow-[#3440541a] hover:shadow-[0px_0px_50px_1px] hover:shadow-[#3440541a] rounded-[10px] overflow-hidden">
      <Form
        name="basic"
        onFinish={onFinish}
        layout="vertical"
        className="max-w-[1000px] mx-auto items-center grid grid-cols-4 gap-3 *:!m-0"
      >
        <Form.Item>
          <Input
            onChange={(e) =>
              setParams([{ name: "searchTerm", value: e.target.value }])
            }
            placeholder="Text Field"
            type="text"
          />
        </Form.Item>

        <Form.Item name="size">
          <Select placeholder="Select Size">
            <Option value="Small">Small</Option>
            <Option value="Medium">Medium</Option>
            <Option value="Large">Large</Option>
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
