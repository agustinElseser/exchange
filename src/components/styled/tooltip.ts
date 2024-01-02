import styled from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
`;

export const TooltipText = styled.span`
  visibility: hidden;
  position: absolute;
  min-width: 280px;
  width: fit-content;
  padding: 5px;
  background-color: #555;
  color: white !important;
  border-radius: 3px;
  text-align: center;
  bottom: -250%;
  left: -150%;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 1;
`;

export const TooltipTrigger = styled.span`
  &:hover + ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;
