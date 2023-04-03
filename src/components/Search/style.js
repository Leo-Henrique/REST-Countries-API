import styled, { css } from "styled-components";

export const Wrapper = styled.label(({ theme }) => (css`
    max-width: 480px;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.block};
    border-radius: ${theme.borderRadius.block};
    color: ${theme.colors.text};

    span {
        display: block;
        padding-left: 2rem;
        svg {
            fill: currentColor
        }
    }
    input {
        width: 100%;
        padding: 1.8rem;
        background-color: transparent;
        color: currentColor;
        outline: none;

        &::placeholder {
            color: ${theme.colors.input};
            ${theme.mixins.transition(["color"])};
        }
        &:focus::placeholder {
            color: ${theme.colors.text};
        }
        &::-webkit-search-decoration,
        &::-webkit-search-cancel-button,
        &::-webkit-search-results-button,
        &::-webkit-search-results-decoration {
            display: none;
        }
    }
    ${theme.mixins.shadowStates};
    padding: 0;
`));