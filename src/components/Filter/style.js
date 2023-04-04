import styled, { css } from "styled-components";

export const Wrapper = styled.div(({ theme }) => (css`
    display: flex;
    align-items: center;
    justify-self: end;

    ${theme.breakpoints.md} {
        justify-self: start;
    }
    > div {
        position: relative;
    }
`));

export const Clear = styled.button(({ theme, $clear, $clearTransition }) => (css`
    padding: 1.2rem;
    color: ${theme.colors.text};
    cursor: pointer;
    display: ${$clear ? "block" : "none"};
    opacity: ${$clearTransition ? 1 : 0};
    transform: ${$clearTransition ? "none" : "translate3d(15px, 0, 0)"};
    ${theme.mixins.transition(["opacity", "transform"])};

    ${theme.media.desktop} {
        &:hover {
            opacity: 0.7;
        }
    }
    &:active {
        opacity: 0.4;
    }

    ${theme.breakpoints.md} {
        order: 1;
        transform: ${$clearTransition ? "none" : "translate3d(-15px, 0, 0)"};
    }
`));

export const Button = styled.button(({ theme, $transition }) => (css`
    min-width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
        transform: ${$transition ? "rotate(180deg)" : "none"};
    }
`));

export const Menu = styled.ul(({ theme, $display, $transition }) => (css`
    position: absolute;
    inset: auto 0;
    z-index: 10;
    margin-top: 4px;
    background-color: ${theme.colors.block};
    border-radius: ${theme.borderRadius.block};
    box-shadow: 0 5px 5px 4px ${theme.colors.shadow};
    padding: calc(1.2rem - 0.4rem) 0;
    display: ${$display ? "block" : "none"};
    opacity: ${$transition ? 1 : 0};
    transform: ${$transition ? "none" : "translate3d(0, -15px, 0)"};
    ${theme.mixins.transition(["opacity", "transform"], "global")};
`));

export const Region = styled.button(({ theme, $active }) => (css`
    width: 100%;
    display: block;
    padding: 0.4rem 2rem;
    cursor: ${$active ? "default" : "pointer"};
    color: ${$active ? theme.colors.input : theme.colors.text};
    ${theme.mixins.transition(["color"])};

    ${theme.media.desktop} {
        &:hover {
            color: ${theme.colors.input};
        }
    }
    &:active {
        color: ${theme.colors.input};
    }
`));