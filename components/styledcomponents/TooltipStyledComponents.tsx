import styled from "styled-components";

export const TooltipContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const TooltipText = styled.span`
  visibility: hidden;
  width: 400px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 3px;
  position: absolute;
  bottom: 125%;
  z-index: 1000;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 12px;
  ${TooltipContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;
