import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiltersArray } from "../../servies/filters";
import styles from "./Country.module.scss";
import {
  fetchCountriesByFiltersThunk,
  selectFilteredCountries,
  selectIsCountriesAreLoaded,
} from "../../store/country.slice";
import CountryCard from "./CountryCard";
import Loading from "../LoadingBox/Loading";

const Country = () => {
  const countries = useSelector(selectFilteredCountries);
  const isLoading = useSelector(selectIsCountriesAreLoaded);
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
  }, [countries.length, dispatch, filters]);

  return (
    <div>
      <div className={styles.wrapper}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {countries &&
              countries.map((item: any) => {
                const { flag, ...rest } = item;

                return (
                  <CountryCard
                    key={item.alpha3Code}
                    flagSrc={flag}
                    data={{ ...rest }}
                  />
                );
              })}
          </>
        )}
      </div>
    </div>
  );
};

export default Country;
