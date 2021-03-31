import React from "react";
import {
  Form,
  Button,
  Upload,
} from "antd";
import "antd/dist/antd.css";
import { UploadOutlined } from "@ant-design/icons";

const normFile = (e) => {
    console.log("Upload event:", e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };

const UploadFile = () => {
  return (
    <Form.Item
      name="upload"
      label="Upload"
      valuePropName="fileList"
      getValueFromEvent={normFile}
    >
      <Upload name="logo" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
    </Form.Item>
  );
};

export default UploadFile;
