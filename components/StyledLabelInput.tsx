import Tooltip from "./Tooltip";
import {
  Container,
  Label,
  Input,
  LabelContainer,
} from "./styledcomponents/StyledLabelInputComponents";
import { RefObject } from "react";

export const tooltipTextStack =
  "A 'stack' in the context of data structures is like a pile of books. You can only add a new book on the top of the pile and remove the top book. This principle is called 'Last In, First Out' (LIFO), meaning the last item you put in is the first one you take out.";
export const tooltipTextOpCode =
  "An opcode is like a secret code that computers use to understand and follow instructions. It's a short command that tells the computer what action to perform, like adding numbers, subtracting, or moving information from one place to another. Just like we follow recipes to cook, computers use opcodes to execute tasks.";

interface StyledLabelInputProps {
  type: string;
  id: string;
  name: string;
  label: string;
  placeholder: string;
  tooltipText: string;
  inputRef: RefObject<HTMLInputElement>;
}

const StyledLabelInput = ({
  type,
  id,
  name,
  label,
  placeholder,
  tooltipText,
  inputRef,
}: StyledLabelInputProps) => {
  return (
    <Container>
      <LabelContainer>
        <Label htmlFor={id}>{label}</Label>
        <Tooltip
          tooltipText={
            tooltipText === "stack" ? tooltipTextStack : tooltipTextOpCode
          }
        >
          <img src="/info.svg" alt="info" />
        </Tooltip>
      </LabelContainer>

      <Input
        ref={inputRef}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default StyledLabelInput;
