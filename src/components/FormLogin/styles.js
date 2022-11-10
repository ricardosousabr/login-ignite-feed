import styled from "styled-components";
import device from "../../tokens/screen";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const BoxTitle = styled.div`
  width: 250px;

  @media ${device.mobileL} {
    width: 400px;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 110px;
  margin-bottom: 60px;
`;

export const InputLogin = styled.input`
  height: 44px;
  width: 300px;
  background: white;
  border-radius: 8px;
  border: none;
  color: black;

  ::-webkit-input-placeholder {
    padding-left: 20px;
  }
  @media ${device.tablet} {
    width: 400px;
  }
`;

export const CotainerText = styled.div`
  width: 310px;
  font-size: 18px;
  color: #e3e3e3;

  @media ${device.mobileL} {
    width: 500px;
  }
`;
