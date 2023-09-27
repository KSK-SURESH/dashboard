import React, { useState } from "react";
import Dashboard from "../../components/dashboard";
import { LoginWrapper, FormContainer, FormHeader, FormWrapper } from "./styles";
import axios from "axios";
import UsersInput from "./usersInput";

const Login: React.FC = () => {
  const [userId, setUserId] = useState(sessionStorage.getItem("UserId") || "");
  const getUsersDetails = () => {
    let userId = sessionStorage.getItem("UserId");
    if (localStorage.getItem(`UserProfile_${userId}`) == null) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => {
          localStorage.setItem(
            `UserProfile_${userId}`,
            JSON.stringify(res.data)
          );
          setUserId(userId || "");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setUserId(userId || "");
    }
  };
  const onLogin = () => {
    getUsersDetails();
  };
  return (
    <>
      {userId ? (
        <Dashboard />
      ) : (
        <>
          <LoginWrapper>
            <FormContainer>
              <FormHeader>Enter any random number between 1-10</FormHeader>
              <FormWrapper>
                <UsersInput onLogin={onLogin} />
              </FormWrapper>
            </FormContainer>
          </LoginWrapper>
        </>
      )}
    </>
  );
};
export default Login;
