import styled, { css } from "styled-components";

export const Wrapper = styled.div(({ theme }) => (css`
    position: relative;
    justify-self: end;

    ${theme.breakpoints.md} {
        justify-self: start;
    }
`));

export const Button = styled.button(({ theme, transition }) => (css`
    display: flex;
    align-items: center;
    column-gap: 4rem;
    background-color: ${theme.colors.block};
    border-radius: ${theme.borderRadius.block};
    color: ${theme.colors.text};
    white-space: nowrap;
    cursor: pointer;
    ${theme.mixins.shadowStates};
    
    svg {
        width: 20px;
        height: auto;
        fill: currentColor;
        ${theme.mixins.transition(["transform"], "global")};
        transform: ${transition ? "rotate(180deg)" : "none"};
    }
`));

export const Menu = styled.ul(({ theme, dropdown, transition }) => (css`
    position: absolute;
    inset: auto 0;
    z-index: 10;
    margin-top: 4px;
    background-color: ${theme.colors.block};
    border-radius: ${theme.borderRadius.block};
    box-shadow: 0 5px 5px 4px ${theme.colors.shadow};
    padding: calc(1.2rem - 0.4rem) 0;
    display: ${dropdown ? "block" : "none"};
    opacity: ${transition ? 1 : 0};
    transform: ${transition ? "none" : "translate3d(0, -15px, 0)"};
    ${theme.mixins.transition(["opacity", "transform"], "global")};

    button {
        width: 100%;
        display: block;
        padding: 0.4rem 2rem;
        cursor: pointer;
        color: ${theme.colors.text};
        ${theme.mixins.transition(["color"])};

        ${theme.media.desktop} {
            &:hover {
                color: ${theme.colors.input};
            }
        }
        &:active {
            color: ${theme.colors.input};
        }
    }
`));