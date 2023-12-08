import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "./AddProductForm.module.css";

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.myButton}>
      {children}
    </button>
  );
};

const AddProductForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", price: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Обов'язково для заповнення";
        }
        if (!values.price) {
          errors.price = "Обов'язково для заповнення";
        } else if (isNaN(values.price)) {
          errors.price = "Ціна повинна бути числом";
        } else if (values.price < 0) {
          errors.price = "Ціна повинна бути не менше 0";
        } else if (values.price <= 10) {
          errors.price = "Ціна має бути більшою за 10";
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={styles.container}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Назва товару:</label>
            <Field type="text" name="name" className={styles.input} />
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Ціна товару:</label>
            <Field type="text" name="price" className={styles.input} />
            <ErrorMessage
              name="price"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <MyButton type="submit">Додати товар</MyButton>
        </div>
      </Form>
    </Formik>
  );
};

export default AddProductForm;
