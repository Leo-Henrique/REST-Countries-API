import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, light, dark } from "./styles/theme";
import GlobalStyle from "./styles/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Country from "./components/pages/Country";
import NotFound from "./components/NotFound.jsx";
import Header from "./components/Header";
import { CountriesStorage } from "./contexts/CountriesContext";

export default function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={{ ...theme, colors: light }}>
                <GlobalStyle />

                <Header />

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
