import styled, { css } from "styled-components";
import Container from "../../helpers/Container";

export const Wrapper = styled(Container)(({ theme }) => (css`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 5rem 0;

    h2 {
        margin-bottom: 6rem;
    }
    p {
        max-width: 500px;
        margin-bottom: 4rem;
        ${theme.mixins.center};
    }
    a {
        ${theme.mixins.button};
        ${theme.mixins.center};
        padding: 1.8rem 3rem;
    }
`));