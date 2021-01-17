import styled from "styled-components";

export const HeaderContainer = styled.div`
  // width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  position: relative;
  font-family: "Sansita Swashed", cursive;
`;
export const P = styled.p`
  width: 100%;
  text-align: center;
  position: absolute;
  margin-top: 25px;
  top: 78px;
  color: ${({ theme }) => theme.text};
  font-weight: 600;
`;
export const Image = styled.img`
  width: 120px;
`;
