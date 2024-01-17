import styled from "styled-components";
import {Link as RouterLink} from 'react-router-dom'


export const Head = styled.header`
    width: 100%;
    text-align: center;
`; 

export const Title = styled.h1`
    font-family: Sans-serif-bold;
    font-size: 80px;
    display: flex;
    justify-content: center;
    letter-spacing: 2px;
`

export const LetterG = styled.p`
    color: #1d1f21;
`
export const LetterO = styled.p`
    color: #2ea082;
`
export const LetterD = styled.p`
    color: #69c16f;
`
export const LetterJs = styled.p`
    color: #d6ec88;
`

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: -65px;
`;

export const Ul = styled.ul`
    list-style: none;
`;

export const Li = styled.li`
     display: inline-block;
     margin-right: 30px;
`;

export const Link = styled(RouterLink)`
    text-decoration: none;
    color: #000;
    font-family: Sans-serif-bold;
    font-weight: bolder;
    letter-spacing: 1px;
    font-size: 20px;
    transition: .2s all ease-in;
    &:hover{
        color: #d6ec88
    }
`