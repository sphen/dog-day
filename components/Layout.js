import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <header>
        <Link href='/'>
          <a>
            <h1>
              Dog Day
            </h1>
            <h2>Contentful and Next.js Starter</h2>
          </a>
        </Link>
      </header>

      <div className='page-content'>{children}</div>

      <footer>
        <p><a href='https://github.com/sphen/dog-day'>https://github.com/sphen/dog-day</a></p>
      </footer>
    </div>
  );
}
