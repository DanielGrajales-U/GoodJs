import InterviewQuestion from "../Components/InterviewQuestion/InterviewQuestion";
import useSEO from "../Hooks/useSEO";
import interviewQuestionsData from "../Mock/Interviews/InterviewQuestions";
import { ListInterviewQuestionProps } from "../Mock/Interviews/interface";

export default function JsInterviews() {
  useSEO({
    title: 'Interview¿?',
    description: 'Preguntas frecuentes en entrevistas'
  })
  return (
    <InterviewQuestion list={interviewQuestionsData.questions as ListInterviewQuestionProps[]}/>
  )
}
