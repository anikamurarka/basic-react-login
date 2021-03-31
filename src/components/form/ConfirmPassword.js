import React from "react";
import {
  Form,
  Input
} from "antd";
import "antd/dist/antd.css";

const ConfirmPassword = () => {
  return (
    <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
      <Input.Password />
      </Form.Item>
  );
};

export default ConfirmPassword