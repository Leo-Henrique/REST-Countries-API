import styled, { css } from "styled-components";
import Container from "../../helpers/Container";

export const Wrapper = styled(Container)(({ theme }) => (css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 4.5rem;

    ${theme.breakpoints.md} {
        gap: 2rem;
    }
`));