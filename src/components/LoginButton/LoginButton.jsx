import React, { useState } from "react";
import styles from "./LoginButton.module.css";
import { Modal } from "antd";
import LoginForm from "../LoginForm/LoginForm";

export default function LoginButton({ onLogin }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsModalVisible(false);
      setIsLoading(false);
      onLogin();
    }, 2000);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <button onClick={showModal} className={styles.loginButton}>
        Увійти
      </button>
      <Modal
        title="Авторизація"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={null}
      >
        <LoginForm
          onLogin={handleOk}
          onCancel={handleCancel}
          isLoading={isLoading}
        />
      </Modal>
    </>
  );
}
