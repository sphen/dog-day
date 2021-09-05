import { createClient } from 'contentful';
import Image from 'next/image';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Skele from '../../components/Skele';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'article',
  });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    // same as paths: paths
    paths,
    // false to return 404 page
    // true to return fallback of article component
    fallback: true,
  };
};

// getStaticProps to get data from Contentful
// async because we fetch data
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'article',
    'fields.slug': params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      article: items[0],
    },
    revalidate: 1,
  };
}

const Headers = ({ children }) => <h4 id={children}>{children}</h4>;

const options = {
  renderNode: {
    [BLOCKS.HEADING_4]: (node, children) => <Headers>{children}</Headers>,
  },
};

export default function ArticleDetails({ article }) {
  console.log(article);
  if (!article) return <Skele />;

  const { featuredImage, title, content } = article.fields;
  return (
    <div>
      <div className='banner'>
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          alt={featuredImage.fields.description}
          width={3000}
          height={1115}
          layout={'responsive'}
        />
        <h1>{title}</h1>
      </div>
      <div className='content'>
        <div>{documentToReactComponents(content, options)}</div>
      </div>
    </div>
  );
}
