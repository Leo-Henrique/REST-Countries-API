import React from "react";
import { Wrapper } from "./style";
import SVGSearch from "../../assets/search.svg";
import { CountriesContext } from "../../contexts/CountriesContext";

export default function Search() {
    const { allCountries, setCountries } = React.useContext(CountriesContext);
    const [value, setValue] = React.useState("");
    const change = ({ target }) => {
        setValue(target.value);

        if (target.value !== "") {
            const filtered = allCountries.filter(({ name }) => {
                const regex = new RegExp(`${target.value}`, "i");

                return name.common.match(regex);
            });

            setCountries(filtered);
        } else setCountries(allCountries);
    }

    return (
        <Wrapper htmlFor="search">
            <span>
                <SVGSearch />
            </span>

            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search for a country..."
                value={value}
                onChange={change}
            />
        </Wrapper>
    );
}
