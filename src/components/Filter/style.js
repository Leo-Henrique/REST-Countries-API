import styled, { css } from "styled-components";

export const Wrapper = styled.div(({ theme }) => (css`
    position: relative;
    justify-self: end;
`));

export const Button = styled.button(({ theme }) => (css`
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
    }
`));

export const Menu = styled.ul(({ theme }) => (css`
    position: absolute;
    inset: auto 0;
    z-index: 10;
    margin-top: 4px;
    background-color: ${theme.colors.block};
    border-radius: ${theme.borderRadius.block};
    padding: calc(1.2rem - 0.4rem) 0;
    display: none;

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