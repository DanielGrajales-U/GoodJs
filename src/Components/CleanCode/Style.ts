import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
//CleanCode Styles
export const DescriptionHeader = styled.p`
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-inline-start: 0px;
`;

export const Link = styled(RouterLink)`
    text-decoration: none;
    color: #000;
    font-family: Sans-serif-bold;
    font-weight: bolder;
    letter-spacing: 1px;
    font-size: 20px;
    &:hover{
        color: #d6ec88
    }
`

//ListPractices Styles
export const Subheading = styled.h3`
  font-size: 22px;
`;

export const PracticeDescription = styled.p`

`;

export const GoodPractice = styled.span`
    color: #69c16f;
    letter-spacing: 1px;
    font-weight: 500;
`;

export const BadPractice = styled.span`
    color: #ff6961;
    letter-spacing: 1px;
    font-weight: 500;
`;
