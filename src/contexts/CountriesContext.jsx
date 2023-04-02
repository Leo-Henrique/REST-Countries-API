import React from "react";

export const CountriesContext = React.createContext();
export const CountriesStorage = ({ children }) => {
    const [countries, setCountries] = React.useState(null);

    return (
        <CountriesContext.Provider value={{ countries, setCountries }}>
            {children}
        </CountriesContext.Provider>
    );
};
