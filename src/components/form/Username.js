import { Form, Input} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";


const UserName = () => {
  return (
    <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: "Please input your Username!",
        },
      ]}
    >
      <Input
        prefix={<UserOutlined className="site-form-item-icon" />}
        placeholder="Username"
      />
    </Form.Item>
  );
};

export default UserName