interface Link {
    id: string;
    title: string;
    link: string;
    img: string;
    description: string;
}

export interface CleanCodeProps {
    description: string;
    description2: string;
    links: Link[];
}

export interface PracticeProps {
    id: string;
    name: string;
    description: string;
    language: string;
    code1: string;
    code2: string;
}

export interface DetailsCleanCodeProps {
    type: string;
    practices: PracticeProps[];
}