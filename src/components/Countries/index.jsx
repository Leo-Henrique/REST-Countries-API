import React from "react";
import { Content, Flag, Wrapper } from "./style";
import { Link } from "react-router-dom";
import { CountriesContext } from "../../contexts/CountriesContext";
import { H2 } from "../helpers/Headings";
import { GET_COUNTRIES } from "../../API";

export default function Countries() {
    const { countries, setCountries } = React.useContext(CountriesContext);

    React.useEffect(() => {
        (async () => {
            const response = await fetch(GET_COUNTRIES);
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
                                <H2>{name.common}</H2>

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
                                        <span>{capital ? capital.join(", ") : "None"}</span>
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
