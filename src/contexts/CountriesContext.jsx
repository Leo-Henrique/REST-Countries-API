import React from "react";

export const CountriesContext = React.createContext();
export const CountriesStorage = ({ children }) => {
    const [allCountries, setAllCountries] = React.useState(null);
    const [countries, setCountries] = React.useState(null);
    const [filter, setFilter] = React.useState(null);

    return (
        <CountriesContext.Provider
            value={{
                allCountries,
                setAllCountries,
                countries,
                setCountries,
                filter,
                setFilter,
            }}
        >
            {children}
        </CountriesContext.Provider>
    );
};
