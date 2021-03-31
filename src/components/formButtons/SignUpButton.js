import { Form, Button } from "antd";
import { tailFormItemLayout } from "../../constants";
import "antd/dist/antd.css";

const SignUpButton = () => {
  return (
    <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
  );
};

export default SignUpButton
