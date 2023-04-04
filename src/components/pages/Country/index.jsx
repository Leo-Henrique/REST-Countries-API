import React from "react";
import useMetadata from "../../../hooks/useMetadata";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CountriesContext } from "../../../contexts/CountriesContext";
import { GET_COUNTRIES_BY_CODE, GET_COUNTRY } from "../../../API";
import { Wrapper, Back, Flag, Content, Infos, BorderCountries } from "./style";
import SVGBack from "../../../assets/back.svg";
import { H2 } from "../../helpers/Headings";
import useFetch from "../../../hooks/useFetch";

export default function Country() {
    const { id } = useParams();
    useMetadata({ title: id, desc: `${id} country details.`});

    const navigate = useNavigate();
    const { allCountries } = React.useContext(CountriesContext);
    const { loading, error, request } = useFetch();
    const [country, setCountry] = React.useState(null);
    const [borderCountries, setBorderCountries] = React.useState(null);
    const infos = () => {
        const handleArray = (array) => array ? array.join(", ") : "None";

        return {
            "Population": country.population.toLocaleString("en-US"),
            "Region": country.region,
            "Sub Region": country.subregion,
            "Capital": handleArray(country.capital),
            "Top Level Domain": handleArray(country.tld),
            "Languages": handleArray(Object.values(country.languages))
        }
    }

    React.useEffect(() => {
        const getCountry = async () => {
            const { response, data } = await request(GET_COUNTRY(id));

            if (response.ok) {
                setCountry(data[0]);
                getBorderCountries(data[0]);
            }
        };
        async function getBorderCountries(country) {
            if (country && country.borders) {
                const codes = country.borders.join();
                const { data } = await request(GET_COUNTRIES_BY_CODE(codes));
                const borderCountries = data.map(country => country.name.common);

                setBorderCountries(borderCountries);
            }
        }

        if (allCountries) {
            const country = allCountries.filter(({ name }) => name.common === id)[0];

            setCountry(country);
            getBorderCountries(country);
        } else getCountry();
    }, [id]);

console.log(country)

    if (country) {
        return (
            <Wrapper>
                <Back>
                    <button type="button" onClick={() => navigate(-1)}>
                        <SVGBack />
                        <span>Back</span>
                    </button>
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
    } 
    else if (loading)
        return <>Loading</>
    else if (error)
        return <>Error</>;
    else
        return null;
}
