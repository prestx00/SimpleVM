import {
  TooltipContainer,
  TooltipText,
} from "./styledcomponents/TooltipStyledComponents";

interface TooltipProps {
  tooltipText: string;
  children: React.ReactNode;
}

const Tooltip = ({ children, tooltipText }: TooltipProps) => {
  return (
    <TooltipContainer>
      {children}
      <TooltipText>{tooltipText}</TooltipText>
    </TooltipContainer>
  );
};

export default Tooltip;
