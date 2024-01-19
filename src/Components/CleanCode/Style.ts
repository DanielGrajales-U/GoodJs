import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
//CleanCode Styles
export const HeaderCleanCode = styled.header`
    background-color: #1d1f21;
    border-radius: 10px;
    padding: 10px;
`;

export const DescriptionHeader = styled.p`
    font-size: 18px;
    color: #e0e0e0
`


export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Li = styled.li`
     margin-right: 30px;
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
export const PracticeHeading = styled.div`
    display: flex;
    align-items: center;
`;

export const TitleType = styled.h2`
    font-family: Quicksand;
    font-size: 40px;
    color: #2ea082;
    width: 800px;
`;

export const LinkToBack = styled(RouterLink)`
    font-size: 40px;
    text-decoration: none;
    color: #fff;
    margin-right: 10px;
    font-weight: bolder;
`;

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
