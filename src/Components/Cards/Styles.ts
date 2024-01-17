import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const CardContent = styled.article`
    background-color: #cecece;
    max-width: 350px;
    border-radius: 15px;
    padding: 15px;
    margin: 20px 10px;
    transition: .2s all ease-in-out;
    -webkit-box-shadow: 0px 8px 23px 0px rgba(0,0,0,0.6);
    -moz-box-shadow: 0px 8px 23px 0px rgba(0,0,0,0.6);
    box-shadow: 0px 8px 23px 0px rgba(0,0,0,0.6);
    &:hover{
        cursor: pointer;
        transform: scale(1.02);
    }
`;

export const ImgCard = styled.img`
    width: 80px;
    background-color: #2ea082;
    padding: 10px;
    border-radius: 5px;
`;

export const TitleCard = styled.h2`
    color: #1d1f21;
    font-family: Sans-serif-bold;
`;

export const DescriptionCard = styled.p`
    color: #1d1f21;
    width: 100%;
    height: 170px;
    font-weight: 600;
`;

export const LinkContent = styled.div`
    display: flex;
    justify-content: end;
`;

export const Link = styled(RouterLink)`
    background-color: #828282;
    text-decoration: none;
    color: #fff;
    font-family: Sans-serif-bold;
    font-size: 20px;
    border-radius: 50%;
    margin-left: 85%;
    padding: 10px 15px;
    transition: .2s all ease-in-out;
    &:hover{
        background-color: #1d1f21;
        color: #fff;
    }
`