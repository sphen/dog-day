import { createClient } from 'contentful';
import BlogCard from '../components/BlogCard';

// getStaticProps to get data from Contentful
// async because we fetch data
export async function getStaticProps() {
  // create Contentful client
  // makes connection to Contentful space so we can use methods
  // on 'client' const to access data
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  // grab data with getEntries
  // getEntries takes an object specifying 'content type id' from Contentful
  // stored in res in 'items' property
  const res = await client.getEntries({ content_type: 'article' });

  // returns items as props
  return {
    props: {
      articles: res.items,
    },
    revalidate: 1,
  };
}

export default function Articles({ articles }) {
  return (
    <div className='home-content'>
      <div className='intro'>
        <p>
          This is the introduction to the site{' '}
        </p>
      </div>
      <div className='card-list'>
        {articles.map((article) => (
          <BlogCard key={article.sys.id} article={article} />
        ))}
      </div>
    </div>
  );
}
