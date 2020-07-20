import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {FiltersArray} from "../../servies/filters";
import styles from "./Country.module.scss";
import {
    selectFilteredCountries,
    fetchCountriesByFiltersThunk
} from "../../store/country.slice";
import CountryCard, {CountryBasicData} from "./CountryCard";

const Country = () => {
    const countries = useSelector(selectFilteredCountries);
    const dispatch = useDispatch();

    const filters: FiltersArray = [
        "flag",
        "name",
        "population",
        "region",
        "capital",
        "alpha3Code",
    ];

    useEffect(() => {
        if (countries.length <= 0) {
            dispatch(fetchCountriesByFiltersThunk(filters));
        }
    }, []);

    return (
        <div>
            <h2>country works!</h2>
            <div className={styles.wrapper}>
                {countries &&
                countries.map((item: any, index: number) => {
                    const {flag, ...rest} = item;

                    return (
                        <CountryCard
                            key={item.alpha3Code}
                            flagSrc={flag}
                            data={{...rest}}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Country;
