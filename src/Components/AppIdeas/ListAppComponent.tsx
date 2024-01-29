
import { AppProps } from '../../Mock/AppIdeas';
import Card from '../Card/Card';
import { ListApps } from './Styles';
interface Props {
  list: AppProps[];
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
