import { Head, LetterD, LetterG, LetterJs, LetterO, Li, Nav, Title, Ul, Link} from './Styles';
import { PublicRoutes } from '../../models';

export default function Header() {
  return (
    <Head>
      <Title>
        <LetterG>G</LetterG>
        <LetterO>oo</LetterO>
        <LetterD>d</LetterD>
        <LetterJs>Js</LetterJs>
      </Title>
      <Nav>
        <Ul>
          <Li>
            <Link to={PublicRoutes.HOME}>Inicio</Link>
          </Li>
          <Li>
            <Link to={PublicRoutes.JSCLEANCODE}>Codigo-Limpio</Link>
          </Li>
          <Li>
            <Link to={PublicRoutes.ALGORITHMS}>Algoritmos</Link>
          </Li>
          <Li>
            <Link to={PublicRoutes.APPIDEAS}>Apps</Link>
          </Li>
          <Li>
            <Link to={PublicRoutes.JSINTERVIEWS}>¿?Entrevistas</Link>
          </Li>
        </Ul>
      </Nav>
    </Head>
  );
}
