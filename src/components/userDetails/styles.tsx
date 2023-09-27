import styled from "styled-components";

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  postion: relative;
`;

export const UserContainer = styled.div`
  width: 50%;
  padding: 20px;
  margin: auto;
  border: 2px solid #f1f1f1;
  background: #fff;
  position: absolute;
  top: 5%;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 5px rgba(201, 201, 201, 0.47);
}
`;

export const UserHeader = styled.h3`
  font-size: 20px;
  margin: 5px;
  color: #000;
`;

export const UserDetailWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
`;

export const UserDetailKey = styled.h6`
  font-size: 16px;
  color: #000;
  margin: 5px;
`;

export const UserDetailValues = styled.p`
  font-size: 16px;
  color: #000;
  margin: 5px;
`;

export const EditButton = styled.button`
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 16px;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
`;
