import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useEffect, useState } from "react";
import styles from "./NoteModal.module.sass";

type Props = {
    title?: string;
    content?: string;
    isVisible: boolean;
    handleCancel: () => void;
    handleSave: (data: { title: string; content: string }) => void;
};

const NoteModal: React.FC<Props> = ({
    title = "",
    content = "",
    isVisible,
    handleCancel,
    handleSave,
}) => {
    const [noteInputsData, setNoteInputsData] = useState({
        title,
        content,
    });

    useEffect(() => {
        setNoteInputsData({
            title,
            content,
        });
    }, [title, content]);

    const onInputChange = (e: any, name: string) => {
        setNoteInputsData((state) => ({
            ...state,
            [name]: e.target.innerText,
        }));
    };

    return (
        <Modal
            title={
                <div
                    contentEditable
                    suppressContentEditableWarning={true}
                    className={styles.editable}
                    data-placeholder="Введите заголовок"
                    onInput={(e) => onInputChange(e, "title")}
                >
                    {title}
                </div>
            }
            visible={isVisible}
            onCancel={handleCancel}
            footer={[
                <Button onClick={handleCancel}>Отмена</Button>,
                <Button
                    type="primary"
                    onClick={() => {
                        handleSave(noteInputsData);
                        setNoteInputsData({ title: "", content: "" });
                    }}
                >
                    Сохранить
                </Button>,
            ]}
        >
            <div
                contentEditable
                suppressContentEditableWarning={true}
                className={styles.editable}
                data-placeholder="Заметка.."
                onInput={(e) => onInputChange(e, "content")}
            >
                {content}
            </div>
        </Modal>
    );
};

export default NoteModal;
