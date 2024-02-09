

import Anderson from '../../../public/images/Anderson.png';
import Florin from '../../../public/images/Florin Pop.jpg';
import Lydia from '../../../public/images/lidya.jpg'
import Midu from '../../../public/images/midu.jpg'

import { Container, FooterColumn, FooterContainer, FooterContent, FooterHeading, FooterImg, FooterLink, FooterList, FooterListItem } from './Style';
 
export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterColumn>
            <FooterHeading>Informacion personal</FooterHeading>
            <FooterList>
              <FooterListItem>
                <FooterLink href='https://www.linkedin.com/in/daniel-grajales/'>
                  Linkedin
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href='https://github.com/DanielGrajales-U'>Github</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href='https://daniel-grajales.netlify.app/'>Portafolio</FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterColumn>
          <FooterColumn>
            <FooterHeading>Creditos a</FooterHeading>
            <a target='_blank' href='https://github.com/andersontr15/clean-code-javascript-es'>
              <FooterImg src={Anderson} />
            </a>
            <a target='_blank' href='https://github.com/florinpop17/app-ideas'>
              <FooterImg src={Florin} />
            </a>
            <a target='_blank' href='https://github.com/lydiahallie/javascript-questions'>
              <FooterImg src={Lydia} />
            </a>
            <a target='_blank' href='https://www.linkedin.com/in/midudev/'>
              <FooterImg src={Midu} />
            </a>
          </FooterColumn>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
}
