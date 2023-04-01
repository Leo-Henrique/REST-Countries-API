import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, light, dark } from "./styles/theme";
import GlobalStyle from "./styles/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Country from "./components/Country";
import NotFound from "./components/NotFound.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={{ ...theme, colors: light }}>
                <GlobalStyle />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="country/:id" element={<Country />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}
