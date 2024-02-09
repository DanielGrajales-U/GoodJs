interface OptionProps {
  [key: string]: string | undefined;
}

export interface ListInterviewQuestionProps {
  id: number;
  question: string;
  code?: string;
  options: OptionProps;
  correctAnswer: string;
  explanation: string;
}

export interface InterviewQuestionProps {
  description: string;
  questions: ListInterviewQuestionProps[];
}
