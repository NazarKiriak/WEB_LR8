import React, { useContext, useEffect, useState } from "react";
import styles from "../ProductInfo/ProductInfo.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  comment: Yup.string()
    .min(10, "Мінімальна кількість символів - 10")
    .required("Обов'язково для заповнення"),
});

const MyTextArea = ({ field, form, ...props }) => {
  return <textarea {...field} {...props} />;
};

const MyButton = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

const ProductsPage = ({ product }) => {
  const [comments, setComments] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    if (product) {
      setData(product);
    }
  }, [product]);

  const handleSubmitComment = (values, { resetForm }) => {
    const newComment = `${values.comment}. ${new Date().toLocaleString()}`;
    console.log("Ваш відгук: ", newComment);
    alert(`Ваш відгук: "${newComment}" додано успішно!`);

    setComments([...comments, newComment]);
    resetForm();
  };

  return (
    <div className={styles.product_info}>
      <div className={styles.wrapper_good}>
        <div className={styles.about_good}>
          <h2>
            Товар: {data?.name} (ID: {data?.id})
          </h2>
          <p>{data?.description}</p>
        </div>
        <div className={styles.form_comments}>
          <Formik
            initialValues={{ comment: "" }}
            onSubmit={handleSubmitComment}
            validationSchema={validationSchema}
          >
            <Form>
              <div>
                <h3>Додати коментар:</h3>
                <Field
                  component={MyTextArea}
                  name="comment"
                  placeholder="Напишіть свій коментар"
                />
                <ErrorMessage
                  name="comment"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
              <MyButton type="submit">Додати коментар</MyButton>
            </Form>
          </Formik>
        </div>
        <div className={styles.comments}>
          <h3>Коментарі:</h3>
          <TransitionGroup className={styles.all_comments}>
            {comments.map((comment, index) => (
              <CSSTransition key={index} timeout={500} classNames="fade">
                <div className={styles.new_comment}>
                  <h4>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                      alt="User icon"
                    />
                    User
                  </h4>
                  <h5>
                    {index + 1}. {comment}
                  </h5>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
