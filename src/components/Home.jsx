import React from "react";
import useMetadata from "../hooks/useMetadata";

export default function Home() {
    useMetadata({ 
        title: "REST Countries API",
        desc: "Single Page Application with React and React Router that consumes the REST countries API"
    })

    return <div>Home</div>;
}
