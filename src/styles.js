import styled from "styled-components";

export const StyledTitle = styled.h3`
font-family: Courier New;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.48px;
  color: #0e1649;
  margin-top: 64px;
  margin-left: 64px;
  padding-bottom: 24px;
`;

export const ContentWrapper = styled.div`
    display:flex;
    margin: 0 64px;
    gap: 0px 24px;
`;

export const ColumnContainer = styled.div`
    flex: ${props => props.big ? 2 : 1};
`;
