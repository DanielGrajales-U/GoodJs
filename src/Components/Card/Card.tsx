import {CardContent, DescriptionCard, TitleCard, Link, LinkContent } from "./Styles";

interface Props {
  img: string;
  title: string;
  description: string;
  link: string;
  className: string
}

export default function Card({ img, title, description, link, className }: Props) {
  return (
    <CardContent>
      <img className={className} src={img} />
      <div>
        <TitleCard>{title}</TitleCard>
        <DescriptionCard>{description}</DescriptionCard>
      </div>
      <LinkContent>
        <Link to={link}>¡VAMOS!➜</Link>
      </LinkContent>
    </CardContent>
  );
}
