import React from "react";
import { ThemeSwitcher, Wrapper } from "./style";
import Container from "../helpers/Container";
import { H1 } from "../helpers/Headings";
import SVGMoon from "../../assets/moon.svg";

export default function Header() {
    return (
        <Wrapper>
            <Container>
                <H1>Where in the world?</H1>

                <ThemeSwitcher>
                    <SVGMoon />
                    <span>Dark Mode</span>
                </ThemeSwitcher>
            </Container>
        </Wrapper>
    );
}
