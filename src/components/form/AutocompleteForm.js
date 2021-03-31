import React, { useState } from "react";
import {
  Form,
  Input,
  AutoComplete
} from "antd";
import "antd/dist/antd.css";

const AutoCompleteForm = () => {
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Form.Item
      name="website"
      label="Website"
      rules={[
        {
          required: true,
          message: "Please input website!",
        },
      ]}
    >
      <AutoComplete
        options={websiteOptions}
        onChange={onWebsiteChange}
        placeholder="website"
      >
        <Input />
      </AutoComplete>
    </Form.Item>
  );
};

export default AutoCompleteForm;
