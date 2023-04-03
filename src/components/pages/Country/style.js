import styled, { css } from "styled-components";
import Container from "../../helpers/Container";

export const Wrapper = styled(Container)(({ theme }) => (css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    column-gap: 8rem;

    ${theme.breakpoints.xxl} {
        column-gap: 6rem;
    }
    ${theme.breakpoints.lg} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`));

export const Back = styled.div(({ theme }) => (css`
    grid-column: 1 / 3;
    margin-bottom: 8rem;

    ${theme.breakpoints.xxl} {
        margin-bottom: 6rem;
    }
    ${theme.breakpoints.lg} {
        margin-bottom: 4rem;
    }
    ${theme.breakpoints.md} {
        margin-bottom: 2rem;
    }
    a {
        ${theme.mixins.button};

        svg {
            width: 20px;
            height: auto;
            fill: currentColor;
        }
    }
`));

export const Flag = styled.div(({ theme }) => (css`
    border-radius: ${theme.borderRadius.block};
    overflow: hidden;
    box-shadow: ${theme.shadow} ${theme.colors.shadow};

    ${theme.breakpoints.lg} {
        width: 100%;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 400px;
        object-fit: cover;

        ${theme.breakpoints.md} {
            height: 300px;
        }
        ${theme.breakpoints.sm} {
            height: 200px;
        }
    }
`));

export const Content = styled.div(({ theme }) => (css`
    font-size: 1.6rem;

    ${theme.breakpoints.sm} {
        font-size: 1.4rem;
    }

    h2 {
        font-size: 3.2rem;
        margin-bottom: 3rem;

        ${theme.breakpoints.md} {
            margin-bottom: 2.5rem;
        }
        ${theme.breakpoints.sm} {
            font-size: 2.8rem;
        }
    }
`));

export const Infos = styled.ul(({ theme }) => (css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;

    ${theme.mixins.infos};
    ${theme.breakpoints.md} {
        grid-template-columns: 1fr;
    }
`));

export const BorderCountries = styled.div(({ theme }) => (css`
    margin-top: 6rem;
    display: flex;
    align-items: flex-start;
    gap: 2rem;

    ${theme.breakpoints.xxl} {
        flex-direction: column;
        gap: 1rem;
    }
    ${theme.breakpoints.lg} {
        margin-top: 4rem;
    }

    > span {
        font-weight: 600;
        white-space: nowrap;
    }
    > ul {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        li {
            flex: 1;
        }
        a {
            width: 100%;
            display: block;
            ${theme.mixins.button};
            font-weight: 300;
            opacity: 0.7; 
            padding: 0.6rem 1.2rem;
        }
    }
`));