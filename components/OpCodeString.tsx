import {
  Container,
  OpcodeStringContainer,
  OpcodeElement,
} from "./styledcomponents/OpCodeStyledComponents";

const OpcodeStrings = () => {
  const opcodes: string[] = [
    "0 = IADD(+)",
    "1 = ISUB(-)",
    "2 = IMUL(*)",
    "3 = IDIV(/)",
    "4 = IINC(+1)",
    "5 = IDEC(-1)",
    "6 = FDEL",
    "7 = SWAP",
  ];

  const halfLength = opcodes.length / 2;
  const firstHalf = opcodes.slice(0, halfLength);
  const secondHalf = opcodes.slice(halfLength);

  return (
    <Container>
      <OpcodeStringContainer>
        {firstHalf.map((opcode, index) => (
          <ul key={index}>
            <OpcodeElement>{opcode}</OpcodeElement>
          </ul>
        ))}
      </OpcodeStringContainer>
      <OpcodeStringContainer>
        {secondHalf.map((opcode, index) => (
          <ul key={index}>
            <OpcodeElement>{opcode}</OpcodeElement>
          </ul>
        ))}
      </OpcodeStringContainer>
    </Container>
  );
};

export default OpcodeStrings;
