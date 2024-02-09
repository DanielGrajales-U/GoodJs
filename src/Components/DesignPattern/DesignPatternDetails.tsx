import designPatternsData from '../../Mock/DesignPatterns/DesignPatterns';
import CodeSnippet from '../CodeSnipets/CodeSnipets';
import { HeaderSites, StylesContent } from '../Styles';
import { DescriptionPattern, TitlePattern } from './Style';

export default function DesignPatternDetails() {
  return (
    <StylesContent>
      <HeaderSites>
        <p>{designPatternsData.description}</p>
      </HeaderSites>
      <ul>
        {designPatternsData.patterns.map((pattern) => (
          <div key={pattern.id}>
            <TitlePattern>{pattern.name}</TitlePattern>
            <DescriptionPattern>{pattern.description}</DescriptionPattern>
            <span>
              Sin <b>{pattern.name}</b>
            </span>
            <CodeSnippet code={pattern.code1} language='javascript' key={pattern.id} />
            <span>Con {pattern.name}</span>
            <CodeSnippet code={pattern.code2} language='javascript' key={pattern.id} />
          </div>
        ))}
      </ul>
    </StylesContent>
  );
}
