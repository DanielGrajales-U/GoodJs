export interface ListDesignPatternProps {
    id: number;
    name: string;
    description: string;
    code1: string;
    code2: string
  }

export interface DesignPatternProps {
  name: string;
  description: string;
  patterns: ListDesignPatternProps[]
}