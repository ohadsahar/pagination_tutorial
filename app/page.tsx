import { url } from './constant';
import { Posts } from './Posts';

async function HomePage() {
  const { data } = await fetch(`${url}/api/getPosts`).then((res) => res.json());

  return <Posts posts={data} />;
}

export default HomePage;
