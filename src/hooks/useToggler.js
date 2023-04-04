import React from "react";
import { useTheme } from "styled-components";

export default function useToggler() {
    const [display, setDisplay] = React.useState(false);
    const [transition, setTransition] = React.useState(false);
    const { transitions } = useTheme();
    const attr = "data-transition";
    const duration = transitions.global.duration;
    const open = (btn) => {
        setDisplay(true);
        setTimeout(() => setTransition(true), 20);
        setTimeout(() => btn && btn.removeAttribute(attr), duration + 20);
    }
    const close = (btn) => {
        setTransition(false)
        setTimeout(() => {
            setDisplay(false);
            if (btn) btn.removeAttribute(attr);
        }, duration);
    }
    const toggle = ({ currentTarget: btn }) => {
        if (!btn.hasAttribute(attr)) {
            btn.setAttribute(attr, "");

            !display ? open(btn) : close(btn);
        }
    };

    return { display, transition, toggle, open, close };
}
