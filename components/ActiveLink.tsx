import { CSSProperties, FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
    text: string;
    href: string;
}

const style: CSSProperties = {
    color: '#0070f3',
};

export const ActiveLink: FC<Props> = ({
    text,
    href,
}: PropsWithChildren<{ text: string; href: string }>) => {
    const { asPath } = useRouter();

    return (
        <Link style={asPath === href ? style : {}} href={href}>
            {text}
        </Link>
    );
};
