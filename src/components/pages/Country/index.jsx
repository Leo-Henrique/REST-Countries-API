import React from "react";
import useMetadata from "../../../hooks/useMetadata";
import { Link, useParams } from "react-router-dom";
import { CountriesContext } from "../../../contexts/CountriesContext";
import { GET_COUNTRIES_BY_CODE, GET_COUNTRY } from "../../../API";
import { Wrapper, Back, Flag, Content, Infos, BorderCountries } from "./style";
import SVGBack from "../../../assets/back.svg";
import { H2 } from "../../helpers/Headings";
import NotFound from "../../pages/NotFound";

export default function Country() {
    const { id } = useParams();
    useMetadata({ title: id, desc: `${id} country details.`});
    const { countries } = React.useContext(CountriesContext);
    const [country, setCountry] = React.useState(null);
    const [notFound, setNotFound] = React.useState(null);
    const infos = () => {
        const handleArray = (array) => array ? array.join(", ") : "None";

        return {
            "Population": country.population,
            "Region": country.region,
            "Sub Region": country.subregion,
            "Capital": handleArray(country.capital),
            "Top Level Domain": handleArray(country.tld),
            "Languages": handleArray(Object.values(country.languages))
        }
    }
    const [borderCountries, setBorderCountries] = React.useState(null);
    const neighbors = (countries) => {
        if (countries) {
            (async () => {
                let names = [];
                const codes = countries.join();
                const response = await fetch(GET_COUNTRIES_BY_CODE(codes));
                const data = await response.json();

                if (response.ok) {
                    data.forEach(country => names.push(country.name.common));
                    setBorderCountries(names);
                }
            })();
        }
    }

    React.useEffect(() => {
        if (countries) {
            const country = countries.filter(({ name }) => name.common === id)[0];

            setCountry(country);
            neighbors(country.borders);
        } else {
            (async () => {
                const response = await fetch(GET_COUNTRY(id));
                const data = await response.json();

                if (response.ok) {
                    setCountry(data[0]);
                    neighbors(data[0].borders);
                } else if (response.status === 404)
                    setNotFound(true);
            })();
        }
    }, [id]);

    if (country) {
        return (
            <Wrapper>
                <Back>
                    <Link to="/">
                        <SVGBack />
                        <span>Back</span>
                    </Link>
                </Back>

                <Flag>
                    <img 
                        src={country.flags.svg} 
                        alt={country.name.common} 
                    />
                </Flag>

                <Content>
                    <H2>{country.name.common}</H2>

                    <Infos>
                        {Object.keys(infos()).map(name => (
                            <li key={name}>
                                <span>{name}: </span>
                                <span>{infos()[name]}</span>
                            </li>
                        ))}
                    </Infos>

                    {borderCountries && (
                        <BorderCountries>
                            <span>Border Countries:</span>

                            <ul>
                                {borderCountries.map(country => (
                                    <li key={country}>
                                        <Link to={`/country/${country}`}>
                                            {country}
                                        </Link> 
                                    </li>
                                ))}
                            </ul>
                        </BorderCountries>
                    )}
                </Content>
            </Wrapper>
        );
    } else if (notFound)
        return <NotFound />
    else 
        return null;
}
