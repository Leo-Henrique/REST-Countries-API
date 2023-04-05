import React from "react";
import { Animation, Countries, Country } from "./style";
import Container from "../Container";

export default function Skeleton({ page }) {
    const [width, setWidth] = React.useState(null);
    const container = React.useRef();

    React.useEffect(() => {
        const watch = () => setWidth(container.current.clientWidth);

        watch();
        window.addEventListener("resize", watch);

        return () => window.removeEventListener("resize", watch);
    }, []);

    return (
        <>
            {page === "countries" ? (
                <Countries ref={container}>
                    <Animation $width={width} />
                    
                    {Array.from({ length: 8 }).map((i, index) => (
                        <div key={index}></div>
                    ))}
                </Countries>
            ) : (
                <Country ref={container}>
                    <Animation $width={width} />

                    <div></div>

                    <div>
                        {Array.from({ length: 7 }).map((i, index) => (
                            <div key={index}></div>
                        ))}
                    </div>
                </Country>
            )}
        </>
    );
}
