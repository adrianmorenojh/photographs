import styled from "styled-components";

export const Div = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  // padding-top: 60px;
  left: 0;
  display: ${(props) => props.display};
  // display:flex;
  align-items: center;
  color: white;
  justify-content: center;
`;

export const ExitIconContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: -18px;
  right: -20px;
  color: white;
  border-radius: 5px;
  display: flex;
  padding: 1px;
  background: rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    top: 5px;
    right: 5px;
  }
  @media (max-height: 480px) {
    top: 5px;
    right: 5px;
  }
`;

export const ImageContainer = styled.div`
  max-height: 100vh;
  max-width: 90%;
  border-radius: 2px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  padding: 2px 6px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 2px 2px 0 0;
  max-height: 85vh;
  @media (max-height: 480px) {
    max-height: 100vh;
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  margin: 0 5px 0 0;
`;

export const Details = styled.div`
  display: flex;
`;
export const H2 = styled.h2`
  font-size: 14px;
  margin: 0;
  font-weight: 400;
`;
export const Views = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  color: white !important;
`;
