import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Input, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Ім’я має бути не менше 3 символів")
    .required("Обов'язково для заповнення"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,}$/,
      "В паролі має бути хоча б 1 велика літера та 1 знак відмінний від букви"
    )
    .required("Обов'язково для заповнення"),
});

const LoginForm = ({ onLogin, onCancel, isLoading }) => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onLogin(values);
      }}
    >
      <Form>
        <div style={{ marginBottom: 16 }}>
          <Typography.Text strong>Ім'я користувача:</Typography.Text>
          <Field
            as={Input}
            name="username"
            prefix={<UserOutlined />}
            placeholder="Введіть ім'я користувача"
          />
          <ErrorMessage
            name="username"
            component="div"
            style={{ color: "red" }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Typography.Text strong>Пароль:</Typography.Text>
          <Field
            as={Input.Password}
            name="password"
            prefix={<LockOutlined />}
            placeholder="Введіть пароль"
          />
          <ErrorMessage
            name="password"
            component="div"
            style={{ color: "red" }}
          />
        </div>
        <div>
          <Button key="back" onClick={onCancel} style={{ marginRight: 8 }}>
            Відмінити
          </Button>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Увійти
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
