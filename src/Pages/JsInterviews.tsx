import InterviewQuestion from "../Components/InterviewQuestion/InterviewQuestion";
import useSEO from "../Hooks/useSEO";
import interviewQuestionsData from "../Mock/Interviews/InterviewQuestions";
import { InterviewQuestionProps } from "../Mock/Interviews/InterviewQuestions";

export default function JsInterviews() {
  useSEO({
    title: 'Interview¿?',
    description: 'Preguntas frecuentes en entrevistas'
  })
  return (
    <InterviewQuestion list={interviewQuestionsData as InterviewQuestionProps[]}/>
  )
}
