import React from "react";
import { Content, Flag, Wrapper } from "./style";
import { Link } from "react-router-dom";
import { CountriesContext } from "../../CountriesContext";

export default function index() {
    const { countries, setCountries } = React.useContext(CountriesContext);

    React.useEffect(() => {
        (async () => {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();

            if (response.ok) setCountries(data);
        })();
    }, []);

    if (countries) {
        return (
            <Wrapper>
                {countries.map(({ flags, name, population, region, capital }) => (
                    <li key={name.common}>
                        <Link to={`country/${name.common}`}>
                            <Flag>
                                <img src={flags.svg} alt="" />
                            </Flag>
                            
                            <Content>
                                <h2>{name.common}</h2>

                                <ul>
                                    <li>
                                        <span>Population:</span>
                                        <span>{population}</span>
                                    </li>
                                    <li>
                                        <span>Region:</span>
                                        <span>{region}</span>
                                    </li>
                                    <li>
                                        <span>Capital:</span>
                                        <span>{capital}</span>
                                    </li>
                                </ul>
                            </Content>
                        </Link>
                    </li>
                ))}
            </Wrapper>
        );
    } else return null;
}
