import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const StylesContent = styled.div`
    max-width: 1400px;
    margin: 10px auto;
`;

export const HeaderSites = styled.header`
    background-color: #1d1f21;
    border-radius: 10px;
    padding: 10px;
    font-size: 18px;
    color: #e0e0e0
`;

export const HeaderContent = styled.header`
    background-color: #1d1f21;
    border-radius: 10px;
    padding: 10px;
`;

export const SubPageHeading = styled.div`
    display: flex;
    align-items: center;
`;

export const TitlePage = styled.h2`
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
    transition: .2s all ease-in-out;
    &:hover{
        color: #2ea082
    }
`;
