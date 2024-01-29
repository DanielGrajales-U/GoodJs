export interface AppIdeaProps{
    description: string;
    levels: LevelsProps[];
}

interface LevelsProps {
    title: string;
    proyects: AppProps[]
}

export interface AppProps {
    id: string;
    img: string;
    title: string;
    link: string;
    description: string;
}

interface Requirement {
    id: string;
    description: string;
}

interface Characteristic {
    id: string;
    description: string;
}

interface Example {
    name: string;
    url: string;
}

export interface DetailsProps {
    title: string;
    img: string;
    descriptionRequirement: string;
    requirements: Requirement[];
    characteristics: Characteristic[];
    examples: Example[]
}