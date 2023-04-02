import { breakpoints, desktop, animation } from "./mediaQueries";
import * as mixins from "./mixins";

export const theme = {
    breakpoints,
    media: { desktop, animation },
    mixins,
    grid: {
        container: {
            default: "1280px",
            xxl: "1140px",
            xl: "960px",
            lg: "720px",
            md: "540px",
            sm: "100%",
        },
        gutter: "30px",
    },
    fontFamilies: ["'Nunito Sans', sans-serif"],
    fontSizes: {
        h1: "6.4rem",
        h2: "4.8rem",
        h3: "2.8rem",
        body: "1.8rem",
        small: "1.4rem"
    },
    transitions: {
        global: {
            duration: 300,
            timingFunction: "ease-in-out",
        },
        button: {
            duration: 200,
            timingFunction: "ease-in-out",
        },
    },
};

export const colorScheme = {
    light: {
        block: "#ffffff",
        bg: "#fafafa",
        text: "#111517",
        input: "#858585",
        danger: "#DC3545"
    },
    dark: {
        block: "#2b3945",
        bg: "#202c37",
        text: "#ffffff",
        input: "#ffffff",
        danger: "#DC3545"
    }
}