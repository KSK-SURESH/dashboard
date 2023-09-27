import { Link, NavLink, useNavigate } from "react-router-dom";
import { ListWrapper, ListContainer } from "./styles";

const SideBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <Link to="/" className="logo">
        <img src="../../Tech_MahindraLogo.png" alt="Logo" />
      </Link>
      <ListWrapper>
        <NavLink to="/users">
          <ListContainer>DashBoard</ListContainer>
        </NavLink>
        <NavLink to="/posts">
          <ListContainer>Blogs</ListContainer>
        </NavLink>
        <ListContainer onClick={handleLogout}>Logout</ListContainer>
      </ListWrapper>
    </div>
  );
};
export default SideBar;
