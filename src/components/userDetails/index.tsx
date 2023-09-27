import { Link } from "react-router-dom";
import {
  UserWrapper,
  UserContainer,
  UserHeader,
  UserDetailKey,
  UserDetailWrapper,
  UserDetailValues,
  EditButton,
} from "./styles";

type User = {
  name: string;
  id: string;
  username: string;
  phone: string;
  email: string;
  website: string;
  company: {
    name: string;
  };
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
  };
};

const UserDetails = () => {
  let userId = sessionStorage.getItem("UserId");
  let userData: User =
    JSON.parse(localStorage.getItem(`UserProfile_${userId}`) || "") || {};
  return (
    <UserWrapper>
      <UserContainer>
        <EditButton>
          <Link to={`/users/edituser/${userId}`}>Edit</Link>
        </EditButton>
        <UserHeader>User Profile</UserHeader>
        <UserDetailWrapper>
          <UserDetailKey>Name:</UserDetailKey>
          <UserDetailValues> {userData.name}</UserDetailValues>
        </UserDetailWrapper>
        <UserDetailWrapper>
          <UserDetailKey>Username:</UserDetailKey>
          <UserDetailValues> {userData.username}</UserDetailValues>
        </UserDetailWrapper>
        <UserDetailWrapper>
          <UserDetailKey>Phone:</UserDetailKey>
          <UserDetailValues> {userData.phone}</UserDetailValues>
        </UserDetailWrapper>
        <UserDetailWrapper>
          <UserDetailKey>Email:</UserDetailKey>
          <UserDetailValues> {userData.email}</UserDetailValues>
        </UserDetailWrapper>
        <UserDetailWrapper>
          <UserDetailKey>Website:</UserDetailKey>
          <UserDetailValues> {userData.website}</UserDetailValues>
        </UserDetailWrapper>
        <UserDetailWrapper>
          <UserDetailKey>Company Name:</UserDetailKey>
          <UserDetailValues> {userData.company.name}</UserDetailValues>
        </UserDetailWrapper>
        <UserDetailKey>Address</UserDetailKey>
        <UserDetailWrapper style={{ margin: 5 }}>
          <UserDetailKey>city:</UserDetailKey>
          <UserDetailValues> {userData.address.city}</UserDetailValues>
        </UserDetailWrapper>
        <UserDetailWrapper style={{ margin: 5 }}>
          <UserDetailKey>street:</UserDetailKey>
          <UserDetailValues> {userData.address.street}</UserDetailValues>
        </UserDetailWrapper>
        <UserDetailWrapper style={{ margin: 5 }}>
          <UserDetailKey>suite:</UserDetailKey>
          <UserDetailValues> {userData.address.suite}</UserDetailValues>
        </UserDetailWrapper>
        <UserDetailWrapper style={{ margin: 5 }}>
          <UserDetailKey>zipcode:</UserDetailKey>
          <UserDetailValues> {userData.address.zipcode}</UserDetailValues>
        </UserDetailWrapper>
      </UserContainer>
    </UserWrapper>
  );
};
export default UserDetails;
