import Link from 'next/link';
import { MainLayout } from '@components/layouts/MainLayout';
import { DarkLayout } from '@components/layouts/Darklayout';

export default function ContactPage() {
    return (
        <MainLayout>
            <DarkLayout>
                <h1>
                    Ir al <Link href="/">home!</Link>
                </h1>
                <p>Contact</p>
            </DarkLayout>
        </MainLayout>
    );
}

// Agregando un layout para la página de contacto
