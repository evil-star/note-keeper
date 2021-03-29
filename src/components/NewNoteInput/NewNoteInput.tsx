import React, { useRef, useState } from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { addNote } from "../../reducers/noteReducer";
import { generateId } from "../../helpers/generateId";
import NoteModal from "../NoteModal";

const NewNoteInput: React.FC = () => {
    const dispatch = useDispatch();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const newInputRef = useRef(null);

    const showModal = () => {
        setIsModalVisible(true);
        if (newInputRef && newInputRef.current) {
            // @ts-ignore
            newInputRef.current.input.blur();
        }
    };

    const handleSave = (data: {title: string, content: string}) => {
        const formData = { ...data, id: generateId() };
        dispatch(addNote(formData));
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Input
                placeholder="Новая заметка.."
                onFocus={showModal}
                ref={newInputRef}
            />
            <NoteModal
                isVisible={isModalVisible}
                handleSave={handleSave}
                handleCancel={handleCancel}
            />
        </>
    );
};

export default NewNoteInput;
