import React from "react";
import { useTheme } from "styled-components";

export default function useToggler(element) {
    const [display, setDisplay] = React.useState(false);
    const [transition, setTransition] = React.useState(false);
    const duration = useTheme().transitions.global.duration;
    const attr = "data-transition";
    const notClose = "data-click-outside";
    const clickOutsideAttrs = (add) => {
        const parent = element.current;
        const children = parent.querySelectorAll("*");
        const elements = [parent, ...children];

        if (add)
            elements.forEach(element => element.setAttribute(notClose, ""));
        else
            elements.forEach(element => element.removeAttribute(notClose));
    }
    const clickOutside = React.useCallback(({ target }) => {
        if (!target.hasAttribute(notClose)) close();
    }, []);
    const open = (btn) => {
        setDisplay(true);
        setTimeout(() => setTransition(true), 20);
        setTimeout(() => {
            if (btn) btn.removeAttribute(attr);
            if (element) {
                clickOutsideAttrs(true);
                document.addEventListener("click", clickOutside);
            };
        }, duration + 20);
    }
    function close(btn) {
        setTransition(false);
        setTimeout(() => {
            setDisplay(false);
            if (btn) btn.removeAttribute(attr);
            if (element) {
                clickOutsideAttrs(false);
                document.removeEventListener("click", clickOutside);
            };
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
