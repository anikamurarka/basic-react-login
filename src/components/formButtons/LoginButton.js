import { Form, Button } from "antd";
import "antd/dist/antd.css";

const LoginButton = () => {
  return (
    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
      Or <a href="/signup">register now!</a>
    </Form.Item>
  );
};

export default LoginButton
