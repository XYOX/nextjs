import Link from 'next/link';
import { MainLayout } from '@components/layouts/MainLayout';

export default function HomePage() {
    return (
        <MainLayout>
            <h1>
                Ir al <Link href="/about">about!</Link>
            </h1>
            <p>Home</p>
        </MainLayout>
    );
}
