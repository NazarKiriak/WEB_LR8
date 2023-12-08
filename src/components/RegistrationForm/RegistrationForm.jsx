import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Input, Typography } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./RegistrationForm.module.css";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Ім’я має бути не менше 3 символів")
    .required("Обов'язково для заповнення"),
  lastName: Yup.string()
    .max(40, "Прізвище не повинно бути більше 40 символів")
    .required("Обов'язково для заповнення"),
  email: Yup.string()
    .email("Введіть правильну електронну пошту")
    .required("Обов'язково для заповнення"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,}$/,
      "В паролі має бути хоча б 1 велика літера та 1 знак відмінний від букви"
    )
    .required("Обов'язково для заповнення"),
});

const RegistrationForm = () => {
  const navigate = useNavigate();

  const onRegister = (values) => {
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onRegister(values);
        }}
      >
        <Form className={styles.form}>
          <div style={{ marginBottom: 16 }}>
            <Typography.Text strong>Ім'я:</Typography.Text>
            <Field
              as={Input}
              name="firstName"
              prefix={<UserOutlined />}
              placeholder="Введіть ім'я"
              className={styles.input}
            />
            <ErrorMessage
              name="firstName"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <Typography.Text strong>Прізвище:</Typography.Text>
            <Field
              as={Input}
              name="lastName"
              prefix={<UserOutlined />}
              placeholder="Введіть прізвище"
              className={styles.input}
            />
            <ErrorMessage
              name="lastName"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <Typography.Text strong>Email:</Typography.Text>
            <Field
              as={Input}
              name="email"
              prefix={<MailOutlined />}
              placeholder="Введіть електронну пошту"
              className={styles.input}
            />
            <ErrorMessage
              name="email"
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
              className={styles.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <div>
            <Button type="primary" htmlType="submit" className={styles.button}>
              Зареєструватися
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
