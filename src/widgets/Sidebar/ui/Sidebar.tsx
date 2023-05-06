import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { BsToggleOn, BsToggleOff, BsTranslate } from 'react-icons/bs';
import { Button } from 'shared/ui/Button/Button';
import { ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ThemeSwitcher';
import { SiGoogletranslate } from 'react-icons/si';
import i18n from 'shared/config/i18n/i18n';

interface SidebarProps {
    className?: string;
}

enum Translate {
    RU = 'ru',
    EN = 'en',
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [translate, setTranslate] = useState('ru');

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const onChangeTranslate = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        setTranslate(i18n.language);
    };

    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.switchers}>
                <Button theme={ThemeButton.TOGGLE} onClick={onToggle}>
                    {collapsed ? <BsToggleOff /> : <BsToggleOn />}
                </Button>
                <ThemeSwitcher />
                <Button theme={ThemeButton.TOGGLE} onClick={onChangeTranslate}>
                    {translate === Translate.RU ? (
                        <SiGoogletranslate />
                    ) : (
                        <BsTranslate />
                    )}
                </Button>
            </div>
        </div>
    );
};
