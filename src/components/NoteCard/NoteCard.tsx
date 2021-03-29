import React, { useState } from "react";
import { Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { changeNote, removeNote } from "../../reducers/noteReducer";
import NoteModal from "../NoteModal";

type Props = {
    id: string;
    title: string;
    content: string;
};

const NoteCard: React.FC<Props> = ({ title, content, id }) => {
    const dispatch = useDispatch();

    const [isNoteModalVisible, setIsNoteModalVisible] = useState(false);

    const handleRemoveNote = (id: string) => {
        dispatch(removeNote(id));
    };

    const handleContentSave = (data: { title: string; content: string }) => {
		const dataWithId = {...data, id}
        dispatch(changeNote(dataWithId));
        setIsNoteModalVisible(false);
    };

    return (
        <>
            <Card
                actions={[
                    <DeleteOutlined onClick={() => handleRemoveNote(id)} />,
                ]}
                loading={false}
            >
                <div onClick={() => setIsNoteModalVisible(true)}>
                    <Card.Meta title={title} description={content} />
                </div>
            </Card>

            <NoteModal
                title={title}
                content={content}
                isVisible={isNoteModalVisible}
                handleCancel={() => setIsNoteModalVisible(false)}
                handleSave={handleContentSave}
            />
        </>
    );
};

export default NoteCard;
