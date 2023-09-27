import { Button, Form, Input } from "antd";
import { useState } from "react";

interface UserValue {
  number?: number;
}

interface UserInputProps {
  value?: UserValue;
  onChange?: (value: UserValue) => void;
}

interface UserProps {
  onLogin: () => void;
}

const UserInput: React.FC<UserInputProps> = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState(0);

  const triggerChange = (changedValue: { number?: number }) => {
    onChange?.({ number, ...value, ...changedValue });
  };

  const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = parseInt(e.target.value || "0", 10);
    if (Number.isNaN(number)) {
      return;
    }
    if (!("number" in value)) {
      setNumber(newNumber);
    }
    triggerChange({ number: newNumber });
  };

  return (
    <span>
      <Input
        type="text"
        value={value.number || number}
        onChange={onNumberChange}
        style={{ width: 250 }}
      />
    </span>
  );
};

const UsersInput: React.FC<UserProps> = ({ onLogin }) => {
  const checkUser = (_: any, value: { number: number }) => {
    if (value.number > 0 && value.number < 10) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Please enter number between 1 to 10"));
  };

  const onFinish = (values: any) => {
    sessionStorage.setItem("UserId", values.user.number);
    onLogin();
  };

  return (
    <Form
      name="customized_form_controls"
      onFinish={onFinish}
      initialValues={{
        user: {
          number: 0,
        },
      }}
    >
      <Form.Item name="user" label="User Id" rules={[{ validator: checkUser }]}>
        <UserInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UsersInput;
