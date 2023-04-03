import React from "react";
import { ThemeSwitcher, Wrapper } from "./style";
import Container from "../helpers/Container";
import { H1 } from "../helpers/Headings";
import SVGMoon from "../../assets/moon.svg";

export default function Header({ themePreference, setThemePreference }) {
    const themeNotActive = themePreference === "light" ? "dark" : "light";
    const toggleTheme = () => {
        setThemePreference(themeNotActive);
        localStorage.theme = themeNotActive;
    };
    const formattedThemeName = () => {
        const firstLetter = themeNotActive[0].toUpperCase();

        return firstLetter + themeNotActive.slice(1);
    };

    return (
        <Wrapper>
            <Container>
                <H1>Where in the world?</H1>

                <ThemeSwitcher onClick={toggleTheme}>
                    <SVGMoon />
                    <span>{formattedThemeName()} Mode</span>
                </ThemeSwitcher>
            </Container>
        </Wrapper>
    );
}
