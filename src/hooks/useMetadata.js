import React from "react";

export default function useMetadata({ title, desc, notFoundPage }) {
    const getOG = (value, OG = true) => {
        if (OG)
            return document.querySelector(`meta[property="og:${value}"]`);
        else
            return document.querySelector(value);
    };
    const setOG = (element, value) => element.setAttribute("content", value);
    const handle404 = () => {
        const meta = document.createElement("meta");

        meta.setAttribute("name", "robots");
        meta.setAttribute("content", "none");
        document.head.appendChild(meta);
    }

    React.useEffect(() => {
        const titleFormatted = `${title} | Leonardo Henrique`;
        const descriptions = [
            getOG(`meta[name="description"]`, false), 
            getOG("description"),
        ];

        document.title = titleFormatted;
        setOG(getOG("title", true), titleFormatted);
        descriptions.forEach(element => setOG(element, desc));
        getOG(`link[rel="canonical"]`, false).setAttribute("href", location.href);
        setOG(getOG("url"), location.href);
        setOG(getOG("image"), `${location.origin}/og-image.png`);
        if (notFoundPage) handle404();
    }, []);
}