import React from "react";
import {
  Form,
  Input,
  Select
} from "antd";
import "antd/dist/antd.css";

const { Option } = Select;
const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

const PhoneNumber = () => {
  return (
    <Form.Item
    name="phone"
    label="Phone Number"
    rules={[
      {
        required: true,
        message: "Please input your phone number!",
      },
    ]}
  >
    <Input
      addonBefore={prefixSelector}
      style={{
        width: "100%",
      }}
    />
  </Form.Item>
  );
};

export default PhoneNumber