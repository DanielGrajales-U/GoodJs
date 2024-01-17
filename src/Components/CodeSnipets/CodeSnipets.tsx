import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeSnippetProps {
    language: string;
    code: string;
}

export default function CodeSnippet ({language, code}: CodeSnippetProps) {
    return(
    <SyntaxHighlighter language={language} style={atomDark}>
        {code}
    </SyntaxHighlighter>
    )
}