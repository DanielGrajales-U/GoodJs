import { Head, Li, Nav, Logo, Ul, Link, Spikes, ContentLogo} from './Styles';
import { PublicRoutes } from '../../models';
import logo from '../../../public/images/logo.png'

export default function Header() {
  return (
    <Spikes>
    <Head>
      <ContentLogo>
        <Logo src={logo} />
      </ContentLogo>
      <Nav>
        <Ul>
          <Li>
            <Link to={PublicRoutes.HOME}>Inicio</Link>
          </Li>
          <Li>
            <Link to={PublicRoutes.JSCLEANCODE}>Codigo-Limpio</Link>
          </Li>
          <Li>
            <Link to={PublicRoutes.DESIGNPATTERN}>Patrones de Diseño</Link>
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
    </Spikes>
  );
}
