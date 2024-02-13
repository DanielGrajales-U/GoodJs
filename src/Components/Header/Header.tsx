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
            <Link className='grow-rotate-on-hover' to={PublicRoutes.HOME}>Inicio</Link>

            <Link className='grow-rotate-on-hover' to={PublicRoutes.JSCLEANCODE}>Codigo-Limpio</Link>

            <Link className='grow-rotate-on-hover' to={PublicRoutes.DESIGNPATTERN}>Patrones de Diseño</Link>

            <Link className='grow-rotate-on-hover' to={PublicRoutes.APPIDEAS}>Apps</Link>

            <Link className='grow-rotate-on-hover' to={PublicRoutes.JSINTERVIEWS}>¿?Entrevistas</Link>
          </Ul>
        </Nav>
      </Head>
    </Spikes>
  );
}
