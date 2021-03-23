import React, { useState } from "react";
import { Button, Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import styles from "./NewNoteInput.module.sass";

const NewNoteInput: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Input placeholder="Новая заметка.." onClick={showModal} />
            <Modal
                title={
                    <div
                        contentEditable
                        className={styles.editable}
                        data-placeholder="Введите заголовок"
                    />
                }
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Отмена
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleCancel}>
                        Сохранить
                    </Button>,
                ]}
            >
                <div
                    contentEditable
                    className={styles.editable}
                    data-placeholder="Заметка.."
                />
            </Modal>
        </>
    );
};

export default NewNoteInput;
