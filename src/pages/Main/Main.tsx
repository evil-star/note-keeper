import React, { useEffect } from "react";
import { Layout, Row, Col } from "antd";
import { Empty } from "antd";
import emptyImage from "../../assets/images/empty.png";
import NoteCard from "../../components/NoteCard";
import SidebarNav from "../../components/SidebarNav";
import Logo from "../../components/Logo";
import NewNoteInput from "../../components/NewNoteInput";
import SearchNoteInput from "../../components/SearchNoteInput";
import { fetchNotes } from "../../reducers/noteReducer";
import { RootState } from "../../store";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import styles from "./Main.module.sass"

const { Sider, Content } = Layout;

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch]);

    const notes = useTypedSelector((state: RootState) => state.notes.noteList);

    return (
        <Layout>
            <Sider className={styles.sidebar} width="250">
                <Logo />
                <SidebarNav />
            </Sider>

            <Layout>
                <Content
					className={styles.content}
                >
                    <SearchNoteInput className={styles.search_note_input} />

                    <Row justify="center" className={styles.new_note_row}>
                        <Col span={7}>
                            <NewNoteInput />
                        </Col>
                    </Row>
                    {notes.length ? (
                        <Row gutter={[16, 16]}>
                            {notes.map((note) => (
                                <Col
                                    xxl={6}
                                    lg={8}
                                    sm={12}
                                    span={24}
                                    key={note.id}
                                >
                                    <NoteCard
										id={note.id}
                                        title={note.title}
                                        content={note.content}
                                    />
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <Empty
                            image={emptyImage}
                            description="Нет данных"
                            style={{ margin: 24 }}
                        />
                    )}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Main;
