import styled, { css, keyframes } from "styled-components";
import Container from "../Container";

const animation = ($width, gutter) => keyframes`
    from {
        transform: none;
    }
    to {
        transform: translate3d(${$width + gutter}px, 0, 0);
    }
`;

const block = ({ theme }) => (css`
    border-radius: ${theme.borderRadius.block};
    background-color: ${theme.colors.skeleton};
    box-shadow: ${theme.shadow} ${theme.colors.shadow};
`);

export const Countries = styled.div(({ theme }) => (css`
    margin-top: 10rem;
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 7rem;
    position: relative;

    ${theme.breakpoints.xxl} {
        grid-template-columns: repeat(3, 1fr);
        gap: 5rem;
    }
    ${theme.breakpoints.lg} {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
    ${theme.breakpoints.md} {
        margin-top: 15.9rem;
        grid-template-columns: 1fr;
    }

    > div:not(:first-child) {
        min-width: 260px;
        height: 350px;
        ${block};
    }
`));

export const Country = styled(Container)(({ theme }) => (css`
    margin-top: 18rem;
    display: flex;
    align-items: center;
    gap: 8rem;
    position: relative;

    ${theme.breakpoints.xxl} {
        margin-top: 16rem;  
        gap: 6rem;
    }
    ${theme.breakpoints.lg} {
        margin-top: 15rem;  
        flex-direction: column;
        gap: 3rem;
    }
    ${theme.breakpoints.md} {
        margin-top: 12rem;  
        flex-direction: column;
    }

    > div:not(:first-child) {
        flex: 1;

        ${theme.breakpoints.lg} {
            flex: initial;
            width: 100%;
        }
    }
    > div:nth-child(2) {
        height: 400px;
        ${block};

        ${theme.breakpoints.md} {
            height: 300px;
        }
        ${theme.breakpoints.sm} {
            height: 200px;
        }
    }
    > div:nth-child(3) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        ${theme.breakpoints.lg} {
            grid-template-columns: 1fr;
        }

        > div {
            ${block};
            width: 80%;
            height: 20px;

            ${theme.breakpoints.lg} {
                width: 40%;
            }
        }
        > div:first-child {
            grid-column: 1 / 3;
            width: 55%;
            height: 35px;
            margin-bottom: 2rem;
        }
    }
`));

export const Animation = styled.div(({ theme, $width }) => (css`
    width: 50px;
    height: 100%;
    position: absolute;
    left: -${theme.grid.gutter / 2}px;
    background-color: ${theme.colors.bg};
    box-shadow: 0 0 35px 10px ${theme.colors.bg};
    animation: ${animation($width, theme.grid.gutter)} linear 800ms infinite;
`));
