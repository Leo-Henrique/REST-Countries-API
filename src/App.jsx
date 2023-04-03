import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, colorScheme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Country from "./components/pages/Country";
import NotFound from "./components/pages/NotFound";
import Header from "./components/Header";
import { CountriesStorage } from "./contexts/CountriesContext";

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

    return (
        <BrowserRouter>
            <ThemeProvider
                theme={{
                    ...theme,
                    colors: colorScheme[themePreference],
                }}
            >
                <GlobalStyle />

                <Header
                    themePreference={themePreference}
                    setThemePreference={setThemePreference}
                />

                <CountriesStorage>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="country/:id" element={<Country />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </CountriesStorage>
            </ThemeProvider>
        </BrowserRouter>
    );
}
