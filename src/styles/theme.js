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
        gutter: 30,
    },
    fontFamilies: ["'Nunito Sans', sans-serif"],
    fontSizes: {
        h1: "2.4rem",
        h2: "1.9rem",
        body: "1.4rem",
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
    borderRadius: {
        block: "5px",
    },
    shadow: "0 3px 8px 2px",
};

export const colorScheme = {
    light: {
        block: "#ffffff",
        bg: "#fafafa",
        text: "#111517",
        input: "#858585",
        danger: "#DC3545",
        shadow: "rgba(255, 255, 255, 0)",
        skeleton: "#d9d9d9",
    },
    dark: {
        block: "#2b3945",
        bg: "#202c37",
        text: "#ffffff",
        input: "#a6a6a6",
        danger: "#DC3545",
        shadow: "rgba(0, 0, 0, 0.1)",
        skeleton: "#263340",
    },
};
