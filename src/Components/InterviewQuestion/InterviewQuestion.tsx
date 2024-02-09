import interviewQuestionsData from '../../Mock/Interviews/InterviewQuestions';
import { ListInterviewQuestionProps } from '../../Mock/Interviews/interface';
import CodeSnippet from '../CodeSnipets/CodeSnipets';
import { HeaderSites, StylesContent } from '../Styles';
import { CorrectAnswer, Details, ListOptions, Question, Summary } from './Styles';


interface Props {
  list: ListInterviewQuestionProps[];
}

export default function InterviewQuestion( {list} : Props) {
  return (
    <StylesContent>
      <HeaderSites>
        <p>{interviewQuestionsData.description}</p>
      </HeaderSites>
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
