import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Spikes = styled.section`
  position: relative;
  background: #272727;
  height: 50vh;
  margin-top: -70px;
  margin-bottom: 50px;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    left: -42%;
    top: 100%;
    z-index: 10;
    display: block;
    height: 35px;
    background-size: 35px 100%;
    background-image: linear-gradient(135deg, #272727 25%, transparent 25%),
      linear-gradient(225deg, #272727 25%, transparent 25%);
    background-position: 0 0;
  }
`;

export const Head = styled.header`
  margin-top: 70px;
  width: 100%;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
`;

export const ContentLogo = styled.div`
  width: 100%;
  margin-top: 100px;
`;

export const Logo = styled.img`
  width: 55%;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const Link = styled(RouterLink)`
  display: inline-block;
  background-color: #000;
  padding: 10px 20px;
  border-radius: 15px;
  margin-right: 30px;
  margin-top: 10px;
  text-decoration: none;
  color: #fff;
  font-family: Sans-serif-bold;
  font-weight: bolder;
  letter-spacing: 1px;
  font-size: 17px;
  transition: 0.2s all ease-in;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.2s;
  -webkit-transition-property: transform;
  transition-property: transform;
  &:hover, &:focus, &:active {
    color: #efe62c;
    -webkit-transform: scale(1.1) rotate(4deg);
  transform: scale(1.1) rotate(4deg);
  }
`;
