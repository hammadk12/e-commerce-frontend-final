// Component for scroll position across pages
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface ScrollContextType {
    lastScrollPosition: number;
    setLastScrollPosition: (position: number) => void;
}

const defaultValues: ScrollContextType = {
    lastScrollPosition: 0,
    setLastScrollPosition: () => {}
};

export const ScrollContext = createContext<ScrollContextType>(defaultValues);

interface ScrollProviderProps {
    children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
    const [lastScrollPosition, setLastScrollPosition] = useState<number>(0);

    useEffect(() => {
        // Only retrieve the scroll position when component mounts
        const savedPosition = localStorage.getItem('lastScrollPosition');
        if (savedPosition) {
            setLastScrollPosition(parseInt(savedPosition, 10));
        }
    }, []);

    useEffect(() => {
        // Update local storage whenever lastScrollPosition changes
        localStorage.setItem('lastScrollPosition', lastScrollPosition.toString());
    }, [lastScrollPosition]);

    return (
        <ScrollContext.Provider value={{ lastScrollPosition, setLastScrollPosition }}>
            {children}
        </ScrollContext.Provider>
    );
};