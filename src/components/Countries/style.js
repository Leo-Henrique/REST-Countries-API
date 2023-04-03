import styled, { css } from "styled-components";

export const Wrapper = styled.ul(({ theme }) => (css`
    grid-column: 1 / 3;
    display: flex;
    flex-wrap: wrap;
    gap: 7rem;

    > li {
        flex: 1 260px;
        background-color: ${theme.colors.block};
        border-radius: ${theme.borderRadius.block};
        box-shadow: ${theme.shadow} ${theme.colors.shadow};
        overflow: hidden;
        ${theme.mixins.transition(["transform", "opacity"])};

        ${theme.media.desktop} {
            &:hover {
                transform: scale(1.05);
                opacity: 0.8;
            }
        }
        &:active {
            transform: scale(1.05);
            opacity: 0.6;
        }
    }
    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
`));

export const Content = styled.div(({ theme }) => (css`
    padding: 2rem;
    color: ${theme.colors.text};

    h2 {
        margin-bottom: 2rem;
    }
    ul {
        display: flex;
        flex-direction: column;
        row-gap: 0.2rem;
    }
    ${theme.mixins.infos};
`));