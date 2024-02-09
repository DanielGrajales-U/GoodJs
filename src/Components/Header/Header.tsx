import { Head, Nav, Logo, Ul, Link, Spikes, ContentLogo } from './Styles';
import { PublicRoutes } from '../../models';
import logo from '../../../public/images/logo.png';

export default function Header() {
  return (
    <Spikes>
      <Head>
        <ContentLogo>
          <Logo src={logo} />
        </ContentLogo>
        <Nav>
          <Ul>
            <Link to={PublicRoutes.HOME}>Inicio</Link>

            <Link to={PublicRoutes.JSCLEANCODE}>Codigo-Limpio</Link>

            <Link to={PublicRoutes.DESIGNPATTERN}>Patrones de Diseño</Link>

            <Link to={PublicRoutes.APPIDEAS}>Apps</Link>

            <Link to={PublicRoutes.JSINTERVIEWS}>¿?Entrevistas</Link>
          </Ul>
        </Nav>
      </Head>
    </Spikes>
  );
}
