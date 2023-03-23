import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-bottom: 20px;
  width: 80%;
`;

export const Label = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 54px;
  margin-bottom: 5px;
  margin-right: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  background: #252525;
  border-radius: 20px;
  border: 1px solid #1850ac;
  outline: none;
  color: white;

  &:focus {
    border-color: #f16b16;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
`;
