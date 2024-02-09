import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #272727;
  color: #fff;
  padding: 40px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FooterImg = styled.img`
    width: 50px;
    margin: 10px 5px;
    border-radius: 50%;
`;

export const FooterColumn = styled.div`
  flex: 1;
  margin-right: 20px;
  display: inline-block;
`;

export const FooterHeading = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const FooterListItem = styled.li`
  margin-bottom: 10px;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;