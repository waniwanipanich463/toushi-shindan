import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

export const Container: React.FC<ContainerProps> = ({
    children,
    size = 'lg',
    className,
}) => {
    const classes = [
        styles.container,
        styles[size],
        className
    ].filter(Boolean).join(' ');

    return <div className={classes}>{children}</div>;
};
