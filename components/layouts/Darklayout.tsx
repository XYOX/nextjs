import { FC, PropsWithChildren } from 'react';

export const DarkLayout: FC<PropsWithChildren> = ({
    children,
}: {
    children?: React.ReactNode;
}) => {
    return (
        <div className="dark">
            <main>{children}</main>
        </div>
    );
};
