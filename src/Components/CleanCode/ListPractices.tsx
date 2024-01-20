import { PublicRoutes } from '../../models';
import CodeSnippet from '../CodeSnipets/CodeSnipets';
import { LinkToBack, SubPageHeading, TitlePage } from '../Styles';
import { BadPractice, GoodPractice, PracticeDescription,  Subheading,  } from './Style';

interface ListProps {
  id: string;
  name: string;
  description: string;
  language: string;
  code1: string;
  code2: string;
}

interface Props {
  type: string;
  list: ListProps[];
}

export default function ListPractices({ type, list }: Props) {
  return (
    <>
      <SubPageHeading>
        <LinkToBack to={`/${PublicRoutes.JSCLEANCODE}`}>←</LinkToBack>
        <TitlePage>{type}</TitlePage>
      </SubPageHeading>
      <hr/>
      {list.map((practice) => (
        <div key={practice.id}>
          <Subheading>
            <span>{practice.id}.</span>
            {practice.name}
          </Subheading>
          <PracticeDescription>{practice.description}</PracticeDescription>
          <BadPractice>Mal hecho</BadPractice>
          <CodeSnippet language={practice.language} code={practice.code1} />
          <GoodPractice>Bien hecho</GoodPractice>
          <CodeSnippet language={practice.language} code={practice.code2} />
        </div>
      ))}
    </>
  );
}
