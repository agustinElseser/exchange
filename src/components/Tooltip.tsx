import { TooltipText, TooltipTrigger, TooltipWrapper } from "./styled/tooltip";

export default function Tooltip({ text, children }) {
  return (
    <TooltipWrapper>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipText>{text}</TooltipText>
    </TooltipWrapper>
  );
}
