import logo from "../Images/Logo.png";
import styled from "styled-components";

const StyledLogo = styled.img`
    align-self: center;
`;

const StyledMenu = styled.ul`
  font-family: Assistant;
  font-size: 24px;
  list-style-type: none;
  color: #fff;
  width: 503px;
  display: flex;
  justify-content: space-between;
`;

const Header = ({className}) => {
    return (
        <header className={className}>
                <StyledLogo src={logo} alt="Logo" />
                <StyledMenu>
                    <li>Course</li>
                    <li>Careers</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </StyledMenu>
        </header>
    )
}

export const StyledHeader = styled(Header)`
    background-color: #0e1649;
    padding: 32px 64px;
    display: flex;
    justify-content: space-between;

`;
