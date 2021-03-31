import React from "react";
import Email from "../components/form/Email";
import Password from "../components/form/Password";
import PhoneNumber from "../components/form/PhoneNumber";
import UploadFile from "../components/form/UploadFile";
import CascaderForm from "../components/form/Cascader";
import CheckBoxForm from "../components/form/CheckBox";
import AutoCompleteForm from "../components/form/AutocompleteForm";
import SignUpButton from '../components/formButtons/SignUpButton'
import { formItemLayout, tailFormItemLayout } from "../constants";
import {
  Form,
  Row,
  Col,
  Checkbox,
  
} from "antd";
import "antd/dist/antd.css";
import ConfirmPassword from "./form/ConfirmPassword";


const Application = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    fetch("https://mywebsite.com/endpoint/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  return (
    <div className="application-page">
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      scrollToFirstError
    >
      <Email />
      <Password label="Password" hasFeedback />
      <ConfirmPassword/>
      <CascaderForm />
      <PhoneNumber />
      <Form.Item name="checkbox-group" label="Checkbox.Group">
        {" "}
        <Checkbox.Group>
          {" "}
          <Row>
            {" "}
            <Col span={8}>
              {" "}
              <Checkbox value="A" style={{ lineHeight: "32px" }}>
                {" "}
                A{" "}
              </Checkbox>{" "}
            </Col>{" "}
            <Col span={8}>
              {" "}
              <Checkbox value="B" style={{ lineHeight: "32px" }} disabled>
                {" "}
                B{" "}
              </Checkbox>{" "}
            </Col>{" "}
            <Col span={8}>
              {" "}
              <Checkbox value="C" style={{ lineHeight: "32px" }}>
                {" "}
                C{" "}
              </Checkbox>{" "}
            </Col>{" "}
          </Row>{" "}
        </Checkbox.Group>{" "}
      </Form.Item>

      <UploadFile />
      <AutoCompleteForm />

      <CheckBoxForm
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
        text={
          <p>
            I have read the <a href="/404">agreement</a>
          </p>
        }
      ></CheckBoxForm>
      <SignUpButton/>
    </Form>
    </div>
  );
};

export default Application;
