import React from "react";
import { Wrapper } from "./style";
import { H2 } from "../Headings";
import { useNavigate } from "react-router-dom";

export default function Error({ msg }) {
    const navigation = useNavigate();

    return (
        <Wrapper>
            <H2>An error occurred!</H2>

            <p>
                An error occurred when making the API request we use. The
                API message says the following: <span>"{msg}"</span>.
            </p>

            <button type="button" onClick={() => navigation(0)}>
                Refresh the page
            </button>
        </Wrapper>
    );
}
