import React from "react";
import { Wrapper } from "./style";
import { H2 } from "../Headings";
import { useNavigate } from "react-router-dom";

export default function Error({ msg }) {
    const navigation = useNavigate();

    return (
        <Wrapper>
            <H2 data-animate="fadeDown">An error occurred!</H2>

            <p data-animate="fadeDown">
                An error occurred when making the API request we use. The
                API message says the following: <span>"{msg}"</span>.
            </p>

            <div data-animate="fadeDown">
                <button type="button" onClick={() => navigation(0)}>
                    Refresh the page
                </button>
            </div>
        </Wrapper>
    );
}
