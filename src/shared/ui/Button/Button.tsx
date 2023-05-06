import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
    TOGGLE = 'toggle',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: string | JSX.Element;
    theme?: ThemeButton;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    children,
    theme,
    ...otherProps
}) => {
    return (
        <button
            className={classNames(cls.button, {}, [
                className,
                cls[ThemeButton.CLEAR],
                cls[ThemeButton.TOGGLE],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
