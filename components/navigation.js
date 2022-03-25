import Link from 'next/link'
import { useRouter } from "next/router";

const Navigation = () => {

  const router = useRouter();
  return (
    <nav className='container'>
      <ul className='nav d-flex justify-content-center row center-block'>
        <li className="nav-item pe-auto">
          <Link className="nav-link" href="/">
            <a className={`${router.pathname == "/" ? 'text-white' : 'text-secondary'}`}>
              Home
            </a>
          </Link>
        </li>
        <li className="nav-item mx-4">
          <Link className="nav-link" href="/about">
            <a className={`pe-auto ${router.pathname == "/about" ? 'text-white' : 'text-secondary'}`}>
              About
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact">
            <a className={`${router.pathname == "/contact" ? 'text-white' : 'text-secondary'}`}>
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation