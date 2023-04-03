import styled, { css } from "styled-components";
import Container from "../../helpers/Container";

export const Wrapper = styled(Container)(({ theme }) => (css`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5rem 0;

    h2 {
        font-size: 3.2rem;
        margin-bottom: 5rem;

        ${theme.breakpoints.sm} {
            font-size: 2.8rem;
        }
    }
    p {
        max-width: 500px;
        margin-bottom: 3rem;
        ${theme.mixins.center};
    }
    a {
        ${theme.mixins.button};
        ${theme.mixins.center};
        padding: 1.8rem 3rem;
    }
`));