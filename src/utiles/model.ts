import { IconType } from 'react-icons';
import { ReactNode } from "react";

export interface darkModeContextType {
    isDarkMode: boolean;
    toggleIsDarkMode: () => void
}

export interface MenuType {
    id: number,
    name: string,
    icon: string,
    href: string,
}