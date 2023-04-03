import React from "react";
import { Wrapper } from "./style";
import SVGSearch from "../../assets/search.svg";

export default function Search() {
    return (
        <Wrapper htmlFor="search">
            <span>
                <SVGSearch />
            </span>

            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search for a country..."
            />
        </Wrapper>
    );
}
