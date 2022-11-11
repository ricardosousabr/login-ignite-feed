import styled from "styled-components";
import device from "../../tokens/screen";

export const ButtonLogin = styled.button`
  height: 44px;
  width: 300px;
  background: #00875f;
  border-radius: 8px;
  border: none;
  color: white;
  margin-left: 30px;

  @media ${device.tablet} {
    width: 400px;
  }
`;
