import { Button, Form, Input } from "antd"
import "./index.scss"
import { toast } from "react-toastify";
import api from "../../config/api";
import Header from "../../components/header(def)";

function Register() {

  const handleRegister = async (values) => {
    try {
      await api.post("register", values);
      toast.success("Register successfully!")
    } catch (error) {
      toast.error(error.response.data)

    }
  }

  return (
    <div className="register-page">
      <Header />
      <div className="register-form">
        <h1>Đăng ký</h1>
        <Form
          onFinish={handleRegister}
          labelCol={{
            span: 24,
          }}
        >
          {/* User Name */}
          <Form.Item
            label="User Name"
            name="userName"
            rules={[
              {
                required: true,
                message: 'Please enter your user name',
              },
            ]}
          >
            <Input placeholder="Enter your user name" />
          </Form.Item>

          {/* Password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please enter your password',
              },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please enter a valid email',
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          {/* Phone Number */}
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: 'Please enter your phone number',
              },
            ]}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>

          {/* Address */}
          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: 'Please enter your address',
              },
            ]}
          >
            <Input placeholder="Enter your address" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button style={{ width: " 100%" }} type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>

      </div>
      
    </div>
  )
}

export default Register