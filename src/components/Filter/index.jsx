import React from "react";
import { Menu, Button, Wrapper } from "./style";
import SVGArrow from "../../assets/arrow.svg";

export default function Filter() {
    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

    return (
        <Wrapper>
            <Button>
                <span>Filter by Region</span>

                <SVGArrow />
            </Button>

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
