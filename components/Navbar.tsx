import Link from 'next/link';
import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

type Props = {
    menuItems: {
        text: string;
        href: string;
    }[];
};

const Navbar = ({ menuItems }: Props) => {
    return (
        <nav className={styles['container-links']}>
            {menuItems.map(({ text, href }) => (
                <ActiveLink text={text} href={href} key={href} />
            ))}
        </nav>
    );
};

export default Navbar;
