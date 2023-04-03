import { css } from "styled-components";
import { theme } from "./theme";

export const transition = (properties, type = "button") => (css`
    transition-property: ${properties.join(", ")};
    transition-duration: ${theme.transitions[type].duration}ms;
    transition-timing-function: ${theme.transitions[type].timingFunction};
`);

export const SVGResponsive = (css`
    display: block;
    max-width: 100%;
    height: auto;
`);

export const center = (css`
    margin-left: auto;
    margin-right: auto;
`);

export const shadowStates = ({ theme }) => (css`
    padding: 1.8rem;
    ${transition(["box-shadow"])};
    box-shadow: ${theme.title === "light" ? (
        "0 2px 6px 2px rgba(133, 133, 133, 0.25)"
    ) : (
        `${theme.shadow} ${theme.colors.shadow}`
    )};

    ${theme.media.desktop} {
        &:hover {
            box-shadow: ${theme.title === "light" ? (
                "0 3px 8px 2px rgba(133, 133, 133, 0.4)"
            ) : (
                `0 3px 8px 10px ${theme.colors.shadow}`
            )}
        };
    }
    &:active {
        box-shadow: ${theme.title === "light" ? (
            "0 3px 12px 2px rgba(133, 133, 133, 0.5)"
        ) : (
            `0 3px 10px 10px rgba(17, 21, 23, 0.35)`
        )};
    }
`);

export const button = (({ theme }) => (css`
    min-width: 100px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: ${theme.borderRadius.block};
    background-color: ${theme.colors.block};
    color: ${theme.colors.text};
    ${shadowStates};
`));

export const infos = (css`
    span:first-child {
        font-weight: 600;
    }
    span:last-child {
        font-weight: 300;
        opacity: 0.7;
    }
`);