import React from "react";
import { Layout, Row, Col } from "antd";
import { Empty } from "antd";
import emptyImage from "../../assets/images/empty.png";
import NoteCard from "../../components/NoteCart";
import SidebarNav from "../../components/SidebarNav";
import Logo from "../../components/Logo";
import NewNoteInput from "../../components/NewNoteInput";
import SearchNoteInput from "../../components/SearchNoteInput";

const { Sider, Content } = Layout;

const Main = () => {
    return (
        <Layout>
            <Sider style={{ height: "100vh" }}>
                <Logo />
                <SidebarNav />
            </Sider>

            <Layout>
                <Content
                    style={{
                        margin: "24px 16px",
                        minHeight: 280,
                    }}
                >
                    <SearchNoteInput style={{ marginBottom: 24 }} />

                    <Row justify="center" style={{ marginBottom: 16 }}>
                        <Col span={7}>
                            <NewNoteInput />
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col xxl={6} lg={8} sm={12} span={24}>
                            <NoteCard />
                        </Col>
                    </Row>

                    <Empty
                        image={emptyImage}
                        description="Нет данных"
                        style={{ margin: 24 }}
                    />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Main;
