import Link from 'next/link';
import { MainLayout } from '@components/layouts/MainLayout';
import { DarkLayout } from '@components/layouts/Darklayout';
import { ReactElement } from 'react';

export default function AboutPage() {
    return (
        <>
            <h1>
                Ir al <Link href="/">home!</Link>
            </h1>
            <p>About</p>
        </>
    );
}

// Agregando un layout para la página de about

AboutPage.getLayout = (page: ReactElement) => {
    return (
        <MainLayout>
            <DarkLayout>{page}</DarkLayout>;
        </MainLayout>
    );
};
