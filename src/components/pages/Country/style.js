import styled, { css } from "styled-components";
import Container from "../../helpers/Container";

export const Wrapper = styled(Container)(({ theme }) => (css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    column-gap: 8rem;
`));

export const Back = styled.div(({ theme }) => (css`
    grid-column: 1 / 3;
    margin-bottom: 8rem;

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
    flex: 1;

    border-radius: ${theme.borderRadius.block};
    overflow: hidden;
    box-shadow: ${theme.shadow} ${theme.colors.shadow};

    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
`));

export const Content = styled.div(({ theme }) => (css`
    font-size: 1.6rem;
    flex: 1;

    h2 {
        font-size: 3.2rem;
        margin-bottom: 3rem;
    }
`));

export const Infos = styled.ul(({ theme }) => (css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;

    ${theme.mixins.infos};
`));

export const BorderCountries = styled.div(({ theme }) => (css`
    margin-top: 6rem;
    display: flex;
    align-items: flex-start;
    gap: 2rem;

    > span {
        font-weight: 600;
        white-space: nowrap;
    }
    > ul {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        a {
            ${theme.mixins.button};
            font-weight: 300;
            opacity: 0.7; 
            padding: 0.6rem 1.2rem;
        }
    }
`));