import { Form, Input } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

const Password = (props) => {
  return (
    <Form.Item
      {...props}
      name="password"
      rules={[
        {
          required: true,
          message: "Please input your Password!",
        },
      ]}
    >
      <Input.Password
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
  );
};

export default Password