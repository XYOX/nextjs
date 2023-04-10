import Head from 'next/head';
import Navbar from '@components/Navbar';
import styles from './MainLayout.module.css';

const menuItems = [
    {
        text: 'Home',
        href: '/',
    },
    {
        text: 'About',
        href: '/about',
    },
    {
        text: 'Contact',
        href: '/contact',
    },
    {
        text: 'Pricing',
        href: '/pricing',
    },
];

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="Home" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar menuItems={menuItems} />
            <main className={styles.main}>{children}</main>
        </>
    );
};
