import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { LinkProps, NavLink } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    to: string;
    children: string | JSX.Element | JSX.Element[];
    theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = ({
    children,
    className,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}) => {
    return (
        <NavLink
            to={to}
            className={(navData) =>
                classNames(cls.appLink, { active: navData.isActive }, [
                    className,
                    cls[theme],
                ])
            }
            {...otherProps}
        >
            <span>{children}</span>
        </NavLink>
    );
};
