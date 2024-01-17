import { PublicRoutes } from '../../models';
import CodeSnippet from '../CodeSnipets/CodeSnipets';
import { BadPractice, GoodPractice, LinkToBack, PracticeDescription, PracticeHeading, Subheading, TitleType } from './Style';

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
      <PracticeHeading>
        <LinkToBack to={`/${PublicRoutes.JSCLEANCODE}`}>←</LinkToBack>
        <TitleType>{type}</TitleType>
      </PracticeHeading>
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
