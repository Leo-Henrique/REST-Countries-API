import React from "react";
import { Menu, Button, Wrapper, Region, Clear } from "./style";
import SVGArrow from "../../assets/arrow.svg";
import SVGRemove from "../../assets/remove.svg";
import useToggler from "../../hooks/useToggler";
import { CountriesContext } from "../../contexts/CountriesContext";

export default function Filter() {
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    const { allCountries, setCountries, filter, setFilter } = React.useContext(CountriesContext);
    const menu = React.useRef();
    const { display, transition, toggle, close } = useToggler(menu);
    const {
        display: clear,
        transition: clearTransition,
        open: showClear,
        close: closeClear,
    } = useToggler();
    const handleFilter = ({ currentTarget: btn }) => {
        const region = btn.innerText;
        const filtered = allCountries.filter(country => country.region === region);

        setCountries(filtered);
        setFilter(region);
        close();
        showClear();
    };
    const clearFilter = () => {
        setCountries(allCountries);
        setFilter(null);
        closeClear();
    };

    React.useEffect(() => {
        if (!filter) closeClear();
    }, [filter]);

    return (
        <Wrapper>
            <Clear
                onClick={clearFilter}
                $clear={clear}
                $clearTransition={clearTransition}
            >
                <SVGRemove />
            </Clear>

            <div>
                <Button
                    onClick={toggle}
                    $display={display}
                    $transition={transition}
                >
                    <span>{filter ? filter : "Filter by Region"}</span>

                    <SVGArrow />
                </Button>

                <Menu $display={display} $transition={transition} ref={menu}>
                    {regions.map((region) => (
                        <li key={region}>
                            <Region
                                type="button"
                                onClick={filter === region ? null : handleFilter}
                                $active={filter === region ? true : false}
                            >
                                {region}
                            </Region>
                        </li>
                    ))}
                </Menu>
            </div>
        </Wrapper>
    );
}
