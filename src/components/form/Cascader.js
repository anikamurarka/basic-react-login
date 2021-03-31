import React from "react";
import { Form, Cascader } from "antd";
import "antd/dist/antd.css";
import { residences } from "../../constants";

const CascaderForm = () => {
  return (
    <Form.Item
      name="residence"
      label="Habitual Residence"
      rules={[
        {
          type: "array",
          required: true,
          message: "Please select your habitual residence!",
        },
      ]}
    >
      <Cascader options={residences} />
    </Form.Item>
  );
};

export default CascaderForm;
