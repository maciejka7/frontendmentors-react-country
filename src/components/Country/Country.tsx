import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiltersArray } from "../../servies/filters";
import styles from "./Country.module.scss";
import {
  selectCountriesForHomePage,
  fetchCountriesByFiltersThunk
} from "../../store/country.slice";
import CountryCard, { CountryBasicData } from "./CountryCard";

const Country = () => {
  const countries = useSelector(selectCountriesForHomePage);
  const dispatch = useDispatch();

  const filters: FiltersArray = [
    "flag",
    "name",
    "population",
    "region",
    "capital",
    "alpha3Code"
  ];

  useEffect(() => {
    dispatch(fetchCountriesByFiltersThunk(filters));
  });

  return (
    <div>
      <h2>country works!</h2>
      <div className={styles.wrapper}>
        {countries &&
          countries.map((item, index: number) => {
            const { flag, ...rest } = item;

            return (
              <CountryCard
                key={item.alpha3Code}
                flagSrc={flag}
                data={{ ...rest }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Country;
