import styled, { css } from "styled-components";

export const Wrapper = styled.header(({ theme }) => (css`
    background-color: ${theme.colors.block};
    box-shadow: 0 5px 15px ${theme.colors.shadow};
    padding: 2rem;
    margin-bottom: 4.5rem;

    ${theme.breakpoints.lg} {
        margin-bottom: 3rem;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 3rem;
    }
`));

export const ThemeSwitcher = styled.button(({ theme }) => (css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${theme.colors.text};
    font-weight: 600;
    cursor: pointer;
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