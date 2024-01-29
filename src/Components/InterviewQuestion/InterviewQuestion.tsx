import { InterviewQuestionProps } from '../../Mock/Interviews/InterviewQuestions';
import CodeSnippet from '../CodeSnipets/CodeSnipets';
import { StylesContent } from '../Styles';
import { CorrectAnswer, Details, ListOptions, Question, Summary } from './Styles';


interface Props {
  list: InterviewQuestionProps[];
}

export default function InterviewQuestion( {list} : Props) {
  return (
    <StylesContent>
      {list.map((question) => (
        <div>
          <Question>
            {question.id}. {question.question}
          </Question>
          {question.code ? (
            <CodeSnippet code={question.code} language={'javascript'} key={question.id} />
          ) : null}
         <ListOptions type='A'>
            {Object.entries(question.options).map(([key, value]) => (
              <li key={key}>
                {value}
              </li>
            ))}
          </ListOptions>
          <Details>
            <Summary>Respuesta</Summary>
            <CorrectAnswer>{question.correctAnswer}</CorrectAnswer>
            {question.explanation}
          </Details>
          <hr />
        </div>
      ))}
    </StylesContent>
  );
}
