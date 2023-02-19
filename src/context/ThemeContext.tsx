import React, { ReactElement, createContext, useState, useEffect } from "react";

// Define the ThemeContext.
const ThemeContext = createContext({
    isDarkMode: false,
    toggleTheme: () => {},
});

// Set ThemeContextProvider.
export const ThemeContextProvider = ({
    children,
}: {
    children?: JSX.Element | Array<JSX.Element>;
}): ReactElement => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    // Fetch theme info stored in localStorage.
    useEffect(() => {
        console.log('Theme context being init.')
        if (!localStorage.getItem("isDarkMode")) {
            // Create local storage with item called isDarkMode = false.
            localStorage.setItem("isDarkMode", "false");
            setIsDarkMode(false);
        } else {
            // Fetch the existing theme data from the local storage.
            const darkTheme: boolean = JSON.parse(
                localStorage.getItem("isDarkMode")!
            );

            // Given darkTheme = true, add the dark class to the navbar.
            if (darkTheme) {
                document!.querySelector(".nav")!.classList.add("dark");
                setIsDarkMode(darkTheme);
            }
        }
    }, []);

    const toggleThemeHandler = () : void => {
        // Fetch existing theme data from the localStorage.
        const darkTheme: boolean = JSON.parse(
            localStorage.getItem("isDarkMode")!
        );

        console.log(darkTheme);

        // Toggle the state of theme.
        setIsDarkMode(!darkTheme);

        // Toggle the dark class from the navbar.
        document!.querySelector(".nav")!.classList.toggle("dark");

        // Update localStorage value.
        localStorage.setItem("isDarkMode", `${!darkTheme}`);
    };

    return (
        <ThemeContext.Provider
            value={{
                isDarkMode: isDarkMode,
                toggleTheme: toggleThemeHandler,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
