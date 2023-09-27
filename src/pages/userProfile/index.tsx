import UserDetails from "../../components/userDetails";
import { Space, Layout } from "antd";
import { siderStyle } from "./styles";
import SideBar from "../../components/sideBar";
const { Sider, Content } = Layout;

const UserProfile = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Sider style={siderStyle}>
          <SideBar />
        </Sider>
        <Layout>
          <Content>
            <UserDetails />
          </Content>
        </Layout>
      </Layout>
    </Space>
  );
};
export default UserProfile;
