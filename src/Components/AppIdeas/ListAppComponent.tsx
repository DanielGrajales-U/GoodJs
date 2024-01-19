import Card from '../Card/Card';
import { ListApps } from './Styles';

interface ListProps {
  id: string;
  img: string;
  title: string;
  link: string;
  description: string;
}

interface Props {
  list: ListProps[];
}

export default function ListAppComponent({ list }: Props) {
  return (
    <ListApps>
      {list.map((app) => (
        <Card
          className='card-apps'
          key={app.id}
          title={app.title}
          description={app.description}
          link={app.link}
          img={app.img}
        />
      ))}
    </ListApps>
  );
}
