import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

export default function Nav(){
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href ="/">Home</Link>
                </li>
                <li>
                    <Link href ="/">About</Link>
                </li>
                <li>
                    <Link href ="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    )
};
