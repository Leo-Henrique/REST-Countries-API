import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, colorScheme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import Country from "./components/pages/Country";
import NotFound from "./components/pages/NotFound";
import Header from "./components/Header";
import { CountriesStorage } from "./contexts/CountriesContext";
import useAnimation from "./hooks/useAnimation";

export default function App() {
    const [themePreference, setThemePreference] = React.useState(() => {
        if (!localStorage.theme) {
            const lightPreference = "(preferes-color-scheme: light)";

            if (matchMedia(lightPreference).matches) 
                return "light";
            else 
                return "dark";
        } else return localStorage.theme;
    });
    const RoutesContent = () => {
        const location = useLocation();
        const [displayLocation, setDisplayLocation] = React.useState(location);
        const { attr, className, duration } = useAnimation();

        React.useEffect(() => {
            const elements = document.querySelectorAll(attr);

            elements.forEach(element => element.classList.remove(className));
            setTimeout(() => setDisplayLocation(location), duration);
        }, [location, displayLocation]);

        return (
            <Routes location={displayLocation}>
                <Route path="/" element={<Home />} />
                <Route path="country/:id" element={<Country />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        )
    }

    return (
        <BrowserRouter>
            <ThemeProvider
                theme={{
                    ...theme,
                    title: themePreference,
                    colors: colorScheme[themePreference],
                }}
            >
                <GlobalStyle />

                <Header
                    themePreference={themePreference}
                    setThemePreference={setThemePreference}
                />

                <CountriesStorage>
                    <RoutesContent />
                </CountriesStorage>
            </ThemeProvider>
        </BrowserRouter>
    );
}
