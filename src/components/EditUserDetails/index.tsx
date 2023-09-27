import React, { useState } from "react";
import {
  EditWrapper,
  EditContainer,
  siderStyle,
  FormContainer,
  ButtonContainer,
} from "./styles";
import { Button, Form, Input, Space, Layout } from "antd";
import SideBar from "../../components/sideBar";
import { useNavigate } from "react-router-dom";
const { Sider, Content } = Layout;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

type User = {
  name: string;
  id: string;
  username: string;
  phone: string;
  email: string;
  website: string;
  company: {
    name: string;
  };
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
  };
};
const EditUserDetails: React.FC = () => {
  const navigate = useNavigate();
  let userId = sessionStorage.getItem("UserId");
  let userData: User =
    JSON.parse(localStorage.getItem(`UserProfile_${userId}`) || "") || {};

  const [form] = Form.useForm();
  const [name, setName] = useState(userData.name);
  const [userName, setUserName] = useState(userData.username);
  const [phone, setPhone] = useState(userData.phone);
  const [email, setEmail] = useState(userData.email);
  const [website, setWebsite] = useState(userData.website);
  const [company, setCompany] = useState(userData.company.name);
  const [city, setCity] = useState(userData.address.city);
  const [street, setStreet] = useState(userData.address.street);
  const [suite, setSuite] = useState(userData.address.suite);
  const [zipcode, setZipcode] = useState(userData.address.zipcode);

  const onFinish = (values: any) => {
    let userId = sessionStorage.getItem("UserId");
    const updatedUser = {
      name: name,
      username: userName,
      phone: phone,
      email: email,
      website: website,
      company: {
        name: company,
      },
      address: {
        city: city,
        street: street,
        suite: suite,
        zipcode: zipcode,
      },
    };
    localStorage.setItem(`UserProfile_${userId}`, JSON.stringify(updatedUser));
    setName("");
    setUserName("");
    setPhone("");
    setEmail("");
    setWebsite("");
    setCompany("");
    setCity("");
    setStreet("");
    setSuite("");
    setZipcode("");
    navigate("/users");
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Sider style={siderStyle}>
          <SideBar />
        </Sider>
        <Layout>
          <Content>
            <EditWrapper>
              <EditContainer>
                <Form
                  {...formItemLayout}
                  form={form}
                  name="register"
                  onFinish={onFinish}
                  style={{ maxWidth: 600 }}
                  scrollToFirstError
                >
                  <FormContainer>
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={[
                        {
                          message: "Please input your name!",
                          whitespace: true,
                        },
                      ]}
                      style={{ margin: 10 }}
                    >
                      <Input
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item
                      name="username"
                      label="Username"
                      rules={[
                        {
                          message: "Please input your username!",
                          whitespace: true,
                        },
                      ]}
                      style={{ margin: 10 }}
                    >
                      <Input
                        defaultValue={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </Form.Item>
                  </FormContainer>
                  <FormContainer>
                    <Form.Item
                      name="email"
                      label="E-mail"
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          message: "Please input your E-mail!",
                        },
                      ]}
                      style={{ margin: 10 }}
                    >
                      <Input
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item
                      name="phone"
                      label="Phone"
                      rules={[{ message: "Please input your phone number!" }]}
                      style={{ margin: 10 }}
                    >
                      <Input
                        defaultValue={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Item>
                  </FormContainer>
                  <FormContainer>
                    <Form.Item
                      name="website"
                      label="Website"
                      rules={[{ message: "Please input website!" }]}
                      style={{ margin: 10 }}
                    >
                      <Input
                        defaultValue={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </Form.Item>
                    <Form.Item
                      name="company"
                      label="Company"
                      rules={[{ message: "Please input company name" }]}
                      style={{ margin: 10 }}
                    >
                      <Input
                        defaultValue={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </Form.Item>
                  </FormContainer>
                  <FormContainer>
                    <Form.Item
                      name="city"
                      label="City"
                      rules={[
                        {
                          message: "Please input your City!",
                          whitespace: true,
                        },
                      ]}
                      style={{ margin: 10 }}
                    >
                      <Input
                        defaultValue={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </Form.Item>

                    <Form.Item
                      name="street"
                      label="Street"
                      rules={[
                        {
                          message: "Please input your Street!",
                          whitespace: true,
                        },
                      ]}
                      style={{ margin: 10 }}
                    >
                      <Input
                        defaultValue={street}
                        onChange={(e) => setStreet(e.target.value)}
                      />
                    </Form.Item>
                  </FormContainer>
                  <FormContainer>
                    <Form.Item
                      name="suite"
                      label="Suite"
                      rules={[
                        {
                          message: "Please input your suite!",
                          whitespace: true,
                        },
                      ]}
                      style={{ margin: 10 }}
                    >
                      <Input
                        defaultValue={suite}
                        onChange={(e) => setSuite(e.target.value)}
                      />
                    </Form.Item>
                    <Form.Item
                      name="zipcode"
                      label="Zipcode"
                      rules={[
                        {
                          message: "Please input your zipcode!",
                          whitespace: true,
                        },
                      ]}
                      style={{ margin: 10 }}
                    >
                      <Input
                        defaultValue={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                      />
                    </Form.Item>
                  </FormContainer>
                  <ButtonContainer>
                    <Form.Item {...tailFormItemLayout}>
                      <Button type="primary" htmlType="submit">
                        Save
                      </Button>
                    </Form.Item>
                  </ButtonContainer>
                </Form>
              </EditContainer>
            </EditWrapper>
          </Content>
        </Layout>
      </Layout>
    </Space>
  );
};

export default EditUserDetails;
