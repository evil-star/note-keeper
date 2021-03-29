import React from "react";
import { Menu } from "antd";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
	PlusOutlined
} from "@ant-design/icons";

const SidebarNav = () => {
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item icon={<UserOutlined />}>
                nav 1
            </Menu.Item>
            <Menu.Item icon={<VideoCameraOutlined />}>
                nav 2
            </Menu.Item>
            <Menu.Item icon={<UploadOutlined />}>
                nav 3
            </Menu.Item>
            <Menu.Item icon={<PlusOutlined />}>
                Добавить категорию
            </Menu.Item>
        </Menu>
    );
};

export default SidebarNav;
