import { Form, Checkbox } from "antd";
import "antd/dist/antd.css";

const CheckBoxForm = (props) => {
  const {text,name} = props;
    return (
        <Form.Item name={name} valuePropName="checked" noStyle {...props}>
        <Checkbox>{text}</Checkbox>
      </Form.Item>
    )
}

export default CheckBoxForm