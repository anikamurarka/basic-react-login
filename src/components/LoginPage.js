import { Form } from 'antd';

import "antd/dist/antd.css";
import UserName from '../components/form/Username';
import Password from '../components/form/Password'
import LoginButton from '../components/formButtons/LoginButton';
import CheckBoxForm from '../components/form/CheckBox';


const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className = "login-page">
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
     <UserName/>
     <Password/>
      <Form.Item>
        <CheckBoxForm text="Remember Me" name="remember"/>
          <a className="login-form-forgot" href="/404">
          Forgot password
          </a>
      </Form.Item>

     <LoginButton/>
    </Form>
    </div>
  );
};

export default Login



