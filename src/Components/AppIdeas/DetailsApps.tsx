import { PublicRoutes } from '../../models';
import { LinkToBack, SubPageHeading, TitlePage } from '../Styles';
import { DescriptionDetail, ExampleList, ImgDetailApp, MoreDetailsList, RequirementsList, ExampleLink, SubTitleDetails } from './Styles';

interface DetailsProps {
  id: string;
  description: string;
}

interface ExampleProps {
  name: string;
  url: string;
}

interface Props {
  title: string;
  img: string;
  descriptionRequirement: string;
  requirements: DetailsProps[];
  characteristics: DetailsProps[];
  examples: ExampleProps[];
}

export default function DetailsApps({
  title,
  img,
  descriptionRequirement,
  requirements,
  characteristics,
  examples,
}: Props) {
  return (
    <>
      <SubPageHeading>
        <LinkToBack to={`/${PublicRoutes.APPIDEAS}`}>←</LinkToBack>
        <TitlePage>{title}</TitlePage>
      </SubPageHeading>
      <ImgDetailApp src={img} alt={title} />
      <DescriptionDetail>{descriptionRequirement}</DescriptionDetail>
      <hr />
      <SubTitleDetails>Requereimientos</SubTitleDetails>
      <RequirementsList>
        {requirements.map((requirement) => (
          <li>
            {requirement.id}. {requirement.description}
          </li>
        ))}
      </RequirementsList>
      <SubTitleDetails>Caracteristicas adicionales</SubTitleDetails>
      <MoreDetailsList>
        {characteristics.map((char) => (
          <li>{char.description}</li>
        ))}
      </MoreDetailsList>
        <SubTitleDetails>Paginas de ejemplo</SubTitleDetails>
      <ExampleList>
        {examples.map((example) => (
          <ExampleLink href={example.url} target='.blank'>
            {example.name}
          </ExampleLink>
        ))}
      </ExampleList>
    </>
  );
}
