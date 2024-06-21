"use client";
import { TQueryParam } from "@/types/global.type";
import { Form, Input, Select, Button } from "antd";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";

const { Option } = Select;

type SearchPetsProps = {
  setParams: React.Dispatch<React.SetStateAction<TQueryParam[]>>;
};

const SearchPets = ({ setParams }: SearchPetsProps) => {
  const [form] = Form.useForm();
  const [filterOpen, setFilterOpen] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");

  const onFinish = (values: any) => {
    console.log("Success:", values);

    const newParams: TQueryParam[] = [{ name: "limit", value: 9 }];

    // if (searchTerm) {
    //   newParams.push({ name: "searchTerm", value: searchTerm });
    // }

    if (values.species !== undefined) {
      newParams.push({ name: "species", value: values.species });
    }
    if (values.size !== undefined) {
      newParams.push({ name: "size", value: values.size });
    }
    if (values.gender !== undefined) {
      newParams.push({ name: "gender", value: values.gender });
    }

    setParams(newParams);
    form.resetFields();
  };

  return (
    <>
      {filterOpen ? (
        <div
          className={`relative px-6 py-7 border shadow-[0px_0px_20px_1px] shadow-[#3440541a] hover:shadow-[0px_0px_50px_1px] hover:shadow-[#3440541a] rounded-[10px] overflow-hidden`}
        >
          <Form
            form={form}
            name="basic"
            onFinish={onFinish}
            layout="vertical"
            className="max-w-[1000px] mx-auto items-center grid grid-cols-4 gap-3 *:!m-0"
          >
            <Form.Item name="species">
              <Select placeholder="Select Species">
                <Option value="Cat">Cat</Option>
                <Option value="Dog">Dog</Option>
              </Select>
            </Form.Item>

            <Form.Item name="size">
              <Select placeholder="Select Size">
                <Option value="Small">Small</Option>
                <Option value="Medium">Medium</Option>
                <Option value="Large">Large</Option>
              </Select>
            </Form.Item>

            <Form.Item name="gender">
              <Select placeholder="Gender">
                <Option value="MALE">Male</Option>
                <Option value="FEMALE">Female</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <div className="flex items-center justify-between gap-2">
                <Button
                  className="hover:!bg-orange-400 !bg-primary"
                  type="primary"
                  htmlType="submit"
                  block
                >
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
          <div
            className="absolute right-0 top-0  cursor-pointer py-[3px] px-[3px] bg-red-500 hover:!text-secondary text-white rounded-lg text-xl text-center"
            onClick={() => {
              setParams([{ name: "limit", value: 9 }]);
              setFilterOpen(false);
            }}
          >
            <AiOutlineClose />
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center my-2">
          <Input
            onChange={(e) =>
              setParams([
                { name: "searchTerm", value: e.target.value },
                { name: "limit", value: 9 },
              ])
            }
            className="w-[30%] !py-1.5 placeholder:!text-primary placeholder:!text-opacity-70"
            placeholder="Search Pet"
            type="text"
          />

          <button
            onClick={() => setFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-1.5  hover:transition-all ease-in-out duration-500 !text-sm border-[1px] rounded-lg bg-white text-primary hover:border-primary hover:text-primary"
          >
            <FaFilter className="text-primary" />
            Filter Pet
          </button>
        </div>
      )}
    </>
  );
};

export default SearchPets;
