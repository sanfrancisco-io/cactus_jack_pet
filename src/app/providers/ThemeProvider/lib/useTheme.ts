import { useContext } from 'react';
import {
    Theme,
    ThemeContext,
    LOCAL_STORAGE_THEME_KEY,
} from '../lib/ThemeContext';

interface IThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): IThemeResult => {
    const { setTheme, theme } = useContext(ThemeContext);

    const handleChangeTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme: handleChangeTheme,
    };
};
