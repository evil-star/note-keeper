import { Form, Input, Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import firebase from "firebase/app";

const RegModal: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(true);

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(`${errorCode} ${errorMessage}`);
            });
    };

    const onFinishFailed = () => {};

    return (
        <Modal
            title="Регистрация"
            visible={isModalVisible}
            closable={false}
            maskClosable={false}
            onCancel={() => setIsModalVisible(false)}
            footer={[
                <Button onClick={() => form.submit()} type="primary">
                    Зарегистрироваться
                </Button>,
            ]}
        >
            <Form
                form={form}
                labelCol={{ span: 5 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                validateMessages={{
                    required: "Введите '${name}'",
                    types: {
                        email: "Невалидный e-mail",
                    },
                }}
                name="reg"
            >
                <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: "email",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default RegModal;
