import styled, { css } from "styled-components";

export const H1 = styled.h1(({ theme }) => (css`
    font-size: ${theme.fontSizes.h1};
    line-height: 1.1;

    ${theme.breakpoints.sm} {
        font-size: 2rem;
        line-height: 1.15;
    }
`));

export const H2 = styled.h2(({ theme }) => (css`
    font-size: ${theme.fontSizes.h2};
    line-height: 1.3;
`));