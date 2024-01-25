import InterviewQuestion, {ListProps} from "../Components/InterviewQuestion/InterviewQuestion";
import interviewQuestionsData from "../Mock/Interviews/InterviewQuestions";


export default function JsInterviews() {
  return (
    <InterviewQuestion list={interviewQuestionsData as ListProps[]}/>
  )
}
