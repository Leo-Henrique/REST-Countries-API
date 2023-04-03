import React from "react";
import useMetadata from "../../../hooks/useMetadata";
import { Wrapper } from "./style";
import { H1 } from "../../helpers/Headings";
import { Link } from "react-router-dom";

export default function NotFound() {
    useMetadata({
        title: "Page not found",
        desc: "",
        notFoundPage: true,
    });

    return (
        <Wrapper>
            <H1 as="h2">Page not found!</H1>

            <p>
                The requested page has changed or never existed. Make sure the address is correct or go back to the homepage.
            </p>

            <Link to="/">
                Return to home page
            </Link>
        </Wrapper>
    );
}
