"use client";
import { TQueryParam } from "@/types/global.type";
import { Form, Input, Select, Button } from "antd";

const { Option } = Select;

type SearchPetsProps = {
  setParams: React.Dispatch<React.SetStateAction<TQueryParam[]>>;
};

const SearchPets = ({ setParams }: SearchPetsProps) => {
  const [form] = Form.useForm();
  // const [searchTerm, setSearchTerm] = useState("");

  const onFinish = (values: any) => {
    console.log("Success:", values);

    const newParams: TQueryParam[] = [{ name: "limit", value: 9 }];

    // if (searchTerm) {
    //   newParams.push({ name: "searchTerm", value: searchTerm });
    // }

    if (values.size !== undefined) {
      newParams.push({ name: "size", value: values.size });
    }
    if (values.gender !== undefined) {
      newParams.push({ name: "gender", value: values.gender });
    }
    // if (values.select2 !== undefined) {
    //   newParams.push({ name: "select2", value: values.select2 });
    // }

    setParams(newParams);
    form.resetFields();
  };

  return (
    <div className="p-6 border shadow-[0px_0px_20px_1px] shadow-[#3440541a] hover:shadow-[0px_0px_50px_1px] hover:shadow-[#3440541a] rounded-[10px] overflow-hidden">
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        layout="vertical"
        className="max-w-[1000px] mx-auto items-center grid grid-cols-4 gap-3 *:!m-0"
      >
        <Form.Item>
          <Input
            onChange={(e) =>
              setParams([
                { name: "searchTerm", value: e.target.value },
                { name: "limit", value: 9 },
              ])
            }
            placeholder="Search"
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
            <div
              className="hover:!bg-gray-950 !bg-secondary text-white cursor-pointer py-[5px] px-4 rounded-lg text-base text-center"
              onClick={() => setParams([{ name: "limit", value: 9 }])}
            >
              Cancel
            </div>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SearchPets;
