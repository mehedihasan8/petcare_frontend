import { useChangePasswordMutation } from "@/redux/features/user/user.api";
import { Col, Form, Input, Row } from "antd";
import { toast } from "sonner";

type TChangePass = {
  currentPassword: string;
  newPassword: string;
};

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const [form] = Form.useForm();

  const handelPasswordChange = async (data: TChangePass) => {
    const toastId = toast.loading("Password changing...");

    console.log("password changed--=>", data);

    try {
      const changeObject = {
        oldPassword: data?.currentPassword,
        newPassword: data?.newPassword,
      };

      const res = await changePassword(changeObject).unwrap();

      res && toast.success("Password change successfully!", { id: toastId });
      form.resetFields();
    } catch (error: any) {
      toast.error(error?.data?.errorDetails?.error, { id: toastId });
    }
  };

  ({ getFieldValue }: { getFieldValue: (name: string) => any }) => ({
    validator(_: any, value: any) {
      if (!value || getFieldValue("newPassword") === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("Confirm password do not match!"));
    },
  });
  return (
    <Row className="w-full flex flex-col gap-2 md:gap-5">
      <Col span={24}>
        <Form
          form={form}
          onFinish={handelPasswordChange}
          layout="vertical"
          className="flex justify-between"
        >
          <div className="w-[50%]">
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="currentPassword"
                  label="Current Password"
                  rules={[
                    {
                      required: true,
                      message: "Current Password is required!",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Enter current password"
                    autoComplete="off"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16} className="pt-2">
              <Col span={24}>
                <Form.Item
                  name="newPassword"
                  label="New Password"
                  rules={[
                    {
                      required: true,
                      message: "New Password is required!",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Enter new password"
                    autoComplete="off"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
              <Col span={24} className="pt-2">
                <Form.Item
                  name="confirmPassword"
                  label="Confirm Password"
                  dependencies={["newPassword"]}
                  rules={[
                    {
                      required: true,
                      message: "Provide you confirm password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("newPassword") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Confirm passwords do not match!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    placeholder="Confirm new password"
                    autoComplete="off"
                    className="h-10 border border-[#C4CAD4] rounded-lg"
                  />
                </Form.Item>
              </Col>
            </Row>
          </div>
          <div className="mt-auto">
            <Form.Item>
              <div className="flex items-center justify-end gap-3 ">
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

export default ChangePassword;
