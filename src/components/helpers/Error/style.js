import styled, { css } from "styled-components";
import { Wrapper as NotFound } from "../../pages/NotFound/style";

export const Wrapper = styled(NotFound)(({ theme }) => (css`
    grid-column: 1 / 3;

    h2 {
        color: ${theme.colors.danger};
    }
    p > span {
        color: ${theme.colors.input};
    }
`));