import React from "react";
import { Menu, Button, Wrapper } from "./style";
import SVGArrow from "../../assets/arrow.svg";
import useToggler from "../../hooks/useToggler";

export default function Filter() {
    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const { display, transition, toggle } = useToggler();

    return (
        <Wrapper>
            <Button
                onClick={toggle}
                $display={display}
                $transition={transition}
            >
                <span>Filter by Region</span>

                <SVGArrow />
            </Button>

            <Menu $display={display} $transition={transition}>
                {regions.map((region) => (
                    <li key={region}>
                        <button type="button">{region}</button>
                    </li>
                ))}
            </Menu>
        </Wrapper>
    );
}
