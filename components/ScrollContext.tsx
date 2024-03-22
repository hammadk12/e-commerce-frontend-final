// Component for scroll position across pages
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface ScrollContextType {
    lastScrollPosition: number;
    setLastScrollPosition: (position: number) => void;
}

export const ScrollContext = createContext<ScrollContextType>({
    lastScrollPosition: 0,
    setLastScrollPosition: () => {}
});

interface ScrollProviderProps {
    children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    useEffect(() => {
        const savedPosition = localStorage.getItem('lastScrollPosition');
        if (savedPosition) {
            setLastScrollPosition(parseInt(savedPosition));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('lastScrollPosition', lastScrollPosition.toString());
    }, [lastScrollPosition]);

    return (
        <ScrollContext.Provider value={{ lastScrollPosition, setLastScrollPosition }}>
            {children}
        </ScrollContext.Provider>
    );
};