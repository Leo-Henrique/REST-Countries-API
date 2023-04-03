import React from "react";
import { ThemeSwitcher, Wrapper } from "./style";
import Container from "../helpers/Container";
import { H1 } from "../helpers/Headings";
import SVGMoon from "../../assets/moon.svg";
import { useTheme } from "styled-components";

export default function Header({ themePreference, setThemePreference }) {
    const { transitions } = useTheme();
    const themeNotActive = themePreference === "light" ? "dark" : "light";
    const toggleTheme = () => {
        const duration = transitions.global.duration;

        document.body.style.opacity = 0;
        setTimeout(() => {
            setThemePreference(themeNotActive);
            localStorage.theme = themeNotActive;
        }, duration);
        setTimeout(() => document.body.style.opacity = 1, duration);
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
