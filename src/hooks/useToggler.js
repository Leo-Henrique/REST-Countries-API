import React from "react";
import { useTheme } from "styled-components";

export default function useToggler() {
    const [display, setDisplay] = React.useState(false);
    const [transition, setTransition] = React.useState(false);
    const { transitions } = useTheme();
    const toggle = ({ currentTarget: btn }) => {
        const attr = "data-transition";
        const duration = transitions.global.duration;

        if (!btn.hasAttribute(attr)) {
            btn.setAttribute(attr, "");

            if (!display) {
                setDisplay(true);
                setTimeout(() => setTransition(true), 20);
                setTimeout(() => btn.removeAttribute(attr), duration + 20);
            } else {
                setTransition(false)
                setTimeout(() => {
                    setDisplay(false);
                    btn.removeAttribute(attr);
                }, duration);
            }
        }
    };

    return { display, transition, toggle };
}
