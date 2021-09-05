import Link from 'next/link'
import { useEffect } from 'react'
import {useRouter} from 'next/router'


export default function PageNotFound() {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2750);
    })

    return (
        <div className='page-not-found'>
            <h1>404</h1>
            <h3>OOP! That page doesn't exist :(</h3>
            <p>Redirecting you to the <Link href='/'>Homepage</Link></p>

            <style jsx>{`
        .skeleton {
          max-width: 1200px;
          margin: 20px auto;
        }
        .skeleton > div {
          background: #dbcc1a;
          border-radius: 4px;
          margin: 20px 0;
        }
        .s-banner {
          padding: 12% 0;
        }
        .s-header {
          padding: 15px 0;
          max-width: 500px;
        }
        .s-content {
          padding: 8px 0;
          max-width: 1000px;
        }
      `}</style>
        </div>
    )
}
