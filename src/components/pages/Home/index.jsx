import React from "react";
import useMetadata from "../../../hooks/useMetadata";
import { Wrapper } from "./style";
import Search from "../../Search";
import Filter from "../../Filter";
import Countries from "../../Countries";

export default function Home() {
    useMetadata({
        title: "REST Countries API",
        desc: "Single Page Application with React and React Router that consumes the REST countries API.",
    });

    return (
        <Wrapper>
            <Search />
            <Filter />
            <Countries />
        </Wrapper>
    );
}
