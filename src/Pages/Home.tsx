import styled from 'styled-components';

// Estilos del componente utilizando Styled Components
const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
`;

const SpanJs = styled.span`
  color: #efe62c
`;

export default function Home() {

  return (
    <Container>
      <Title>Bienvenido a Good<SpanJs>JS</SpanJs></Title>
      <Description>
        En GoodJs, estamos comprometidos a proporcionarte recursos de alta calidad para mejorar tus habilidades en JavaScript.
        Como desarrollador, sé lo frustrante que puede ser buscar información dispersa y desordenada en diferentes sitios web. Es por eso que decidí crear GoodJs: un banco de información organizada y relevante para todos los que desean profundizar en JavaScript.
      </Description>
    </Container>
  );
}
