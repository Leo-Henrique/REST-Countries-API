import React from "react";
import { Content, Wrapper } from "./style";
import { Link } from "react-router-dom";
import { CountriesContext } from "../../contexts/CountriesContext";
import { H2 } from "../helpers/Headings";
import { GET_COUNTRIES } from "../../API";
import useFetch from "../../hooks/useFetch";
import Error from "../helpers/Error";
import Skeleton from "../helpers/Skeleton";

export default function Countries() {
    const { setAllCountries, countries, setCountries } = 
        React.useContext(CountriesContext);
    const { request, error, loading } = useFetch();

    React.useEffect(() => {
        (async () => {
            const { response, data } = await request(GET_COUNTRIES);
            
            if (response.ok) {
                data.sort((a, b) => (
                    a.name.common.localeCompare(b.name.common)
                ));

                setAllCountries(data);
                setCountries(data);
            }
        })();
    }, []);

    if (countries) {
        return (
            <Wrapper>
                {countries.map(({ flags, name, population, region, capital }) => (
                    <li key={name.common}>
                        <Link to={`country/${name.common}`}>
                            <img 
                                src={flags.svg} 
                                alt="" 
                                onLoad={({ target }) => target.style.opacity = 1} 
                            />
                            
                            <Content>
                                <H2>{name.common}</H2>

                                <ul>
                                    <li>
                                        <span>Population: </span>
                                        <span>{population.toLocaleString("en-US")}</span>
                                    </li>
                                    <li>
                                        <span>Region: </span>
                                        <span>{region}</span>
                                    </li>
                                    <li>
                                        <span>Capital: </span>
                                        <span>{capital ? capital.join(", ") : "None"}</span>
                                    </li>
                                </ul>
                            </Content>
                        </Link>
                    </li>
                ))}
            </Wrapper>
        );
    } 
    else if (loading)
        return <Skeleton page="countries" />
    else if (error)
        return <Error msg={error} />
    else null;
}
