import React from "react";
import { Menu, Button, Wrapper } from "./style";
import SVGArrow from "../../assets/arrow.svg";
import { useTheme } from "styled-components";

export default function Filter() {
    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const [dropdown, setDropdown] = React.useState(false);
    const [transition, setTransition] = React.useState(false);
    const { transitions } = useTheme();
    const handleDropdown = ({ currentTarget: btn }) => {
        const attr = "data-transition";
        const duration = transitions.global.duration;

        if (!btn.hasAttribute(attr)) {
            btn.setAttribute(attr, "");

            if (!dropdown) {
                setDropdown(true);
                setTimeout(() => setTransition(true), 20);
                setTimeout(() => btn.removeAttribute(attr), duration + 20);
            } else {
                setTransition(false)
                setTimeout(() => {
                    setDropdown(false);
                    btn.removeAttribute(attr);
                }, duration);
            }
        }
    };
    console.log(transition)

    return (
        <Wrapper>
            <Button
                onClick={handleDropdown}
                dropdown={dropdown}
                transition={transition}
            >
                <span>Filter by Region</span>

                <SVGArrow />
            </Button>

            <Menu dropdown={dropdown} transition={transition}>
                {regions.map((region) => (
                    <li key={region}>
                        <button type="button">{region}</button>
                    </li>
                ))}
            </Menu>
        </Wrapper>
    );
}
