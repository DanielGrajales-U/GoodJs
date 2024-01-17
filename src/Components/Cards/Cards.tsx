import {CardContent, DescriptionCard, ImgCard, TitleCard, Link, LinkContent } from "./Styles";

interface Props {
  img: string;
  title: string;
  description: string;
  link: string;
}

export default function Cards({ img, title, description, link }: Props) {
  return (
    <CardContent>
      <ImgCard src={img} />
      <div>
        <TitleCard>{title}</TitleCard>
        <DescriptionCard>{description}</DescriptionCard>
      </div>
      <LinkContent>
        <Link to={link}>→</Link>
      </LinkContent>
    </CardContent>
  );
}
