import { Form, Input, Button, Checkbox } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";

const AuthModal: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const [form] = Form.useForm();

    const handleSubmit = () => {};

    const onFinish = (values: any) => {
        console.log(values);
    };

    const onFinishFailed = () => {};

    return (
        <Modal
            title="Авторизация"
            visible={isModalVisible}
            closable={false}
            maskClosable={false}
            onCancel={() => setIsModalVisible(false)}
            footer={[
                <Button onClick={() => form.submit()} type="primary">
                    Войти
                </Button>,
            ]}
        >
            <Form
                form={form}
                labelCol={{ span: 5 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
				name="auth"
            >
                <Form.Item
                    label="Логин"
                    name="login"
                    rules={[
                        {
                            required: true,
                            message: "Введите логин",
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
                            message: "Введите пароль",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 5, span: 24 }}
                >
                    <Checkbox>Запомнить</Checkbox>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AuthModal;
