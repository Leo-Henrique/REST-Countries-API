import React from "react";
import useMetadata from "../hooks/useMetadata";

export default function NotFound() {
    useMetadata({
        title: "Page not found",
        desc: "",
        notFoundPage: true,
    });

    return <div>NotFound</div>;
}
