import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import UserProfile from "../../pages/userProfile";
import EditUserDetails from "../EditUserDetails";
import Posts from "../../pages/Posts";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users">
          <Route index element={<UserProfile />} />
          <Route path=":userId" element={<UserProfile />} />
          <Route path="edituser/:UserId" element={<EditUserDetails />} />
        </Route>
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
};
export default Dashboard;
