import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ article }) {
  const { title, slug, excerpt, thumbnail } = article.fields;
  return (
    <div className='card'>
      {/* <div className='featured'>
        <Image
          src={'https:' + thumbnail.fields.file.url}
          width={100}
          height={100}
          layout={'responsive'}
        />
      </div> */}
      {/* <div className='content'> */}
      <div className='info'>
        <h5>{title}</h5>
        <p>{excerpt}</p>
      </div>
      <div className='actions'>
        <Link className='actions-cta' href={`/articles/${slug}`}>
          <a>Read More</a>
        </Link>
      </div>
    </div>
    // </div>
  );
}
