import styled from "styled-components";
import { Container } from "./OpCodeStyledComponents";

export const ResultAndExecuteContainer = styled(Container)`
  justify-content: space-between;
`;

export const ResultText = styled.span`
  font-size: 20px;
  font-family: "Inter", sans-serif;
  font-weigth: 500;
`;

export const ExecuteButton = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
  background-color: #252525;
  color: white;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #1850ac;
  width: 150px;
  font-size: 20px;
  cursor: pointer;
  transition: border-color 0.3s, color 0.3s;

  &:hover {
    border-color: #f16b16;
    color: #f16b16;
  }
`;
