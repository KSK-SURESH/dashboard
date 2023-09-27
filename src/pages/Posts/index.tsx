import React, { useEffect, useState } from "react";
import { Space, Table, Layout } from "antd";
import type { ColumnsType } from "antd/es/table";
import { siderStyle, PostWrapper } from "./styles";
import SideBar from "../../components/sideBar";
import axios from "axios";
const { Sider, Content } = Layout;

interface DataType {
  id: string;
  title: string;
  description: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState([]);

  const columns: ColumnsType<DataType> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <h4>{text}</h4>,
    },
    {
      title: "Description",
      dataIndex: "body",
      key: "body",
      render: (text) => <p>{text}</p>,
    },
  ];

  useEffect(() => {
    const USERID = sessionStorage.getItem("UserId");
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${USERID}/posts`)
      .then((res) => {
        localStorage.setItem(`UserPost_${USERID}`, JSON.stringify(res.data));
        const postData = res.data;
        setPosts(postData);
      })
      .catch((error) => {});
  }, []);
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Sider style={siderStyle}>
          <SideBar />
        </Sider>
        <Layout>
          <Content>
            <PostWrapper>
              <Table columns={columns} dataSource={posts} />;
            </PostWrapper>
          </Content>
        </Layout>
      </Layout>
    </Space>
  );
};
export default Posts;
