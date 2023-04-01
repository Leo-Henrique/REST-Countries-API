import React from "react";
import { Menu, Toggle, Wrapper } from "./style";
import SVGArrow from "../../assets/arrow.svg";

export default function Filter() {
    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

    return (
        <Wrapper>
            <Toggle>
                <span>Filter by Region</span>

                <SVGArrow />
            </Toggle>

            <Menu>
                {regions.map(region => (
                    <li key={region}>
                        <button type="button">
                            {region}
                        </button>
                    </li>
                ))}
            </Menu>
        </Wrapper>
    );
}
