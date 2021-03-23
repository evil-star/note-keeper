import React from "react";
import { Card, Skeleton } from "antd";
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from "@ant-design/icons";

const NoteCart = () => {
    return (
        <Card
            hoverable
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Skeleton active loading={false}>
                <Card.Meta
                    title="Card title"
                    description="This is the description"
                />
            </Skeleton>
        </Card>
    );
};

export default NoteCart;
