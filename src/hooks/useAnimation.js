import React from "react";
import LeoAnimate from "leo-animate.js";
import { useTheme } from "styled-components";

export default function useAnimation(dependencies = []) {
    const attr = "[data-animate]"
    const className = "--animated";
    const duration = useTheme().transitions.global.duration;
    const options = {
        multipleElementsDelay: 0,
        transitions: { duration: `${duration}ms`},
    };

    React.useEffect(() => {
        if (dependencies) new LeoAnimate(options);
    }, dependencies);

    return { attr, className, duration };
}
