import {
  StyledHeaderInner,
  StyledHeader,
  StyledLogo,
} from "./styledcomponents/StyledComponents";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledHeaderInner>
          <StyledLogo>
            <img src="/polus.svg" alt="logo" width="100%" height="100%" />
          </StyledLogo>
        </StyledHeaderInner>
      </StyledHeader>
    </>
  );
};

export default Header;
