import * as React from "react";
import { Link } from "react-router-dom";
import { LazyImage } from "react-lazy-images";
import styles from "./CountryCard.module.scss";

export interface CountryBasicData {
  name: string;
  population: string;
  region: string;
  capital: string;
  alpha3Code: string;
}

interface Props {
  flagSrc: string;
  data: CountryBasicData;
}

const CountryCard: React.FunctionComponent<Props> = ({ flagSrc, data }) => {
  const { name, capital, region, population, alpha3Code } = data;

  return (
    <Link className={styles["card"]} to={`/${alpha3Code}`}>
      <LazyImage
        src={flagSrc}
        alt={`${name} flag`}
        placeholder={({ imageProps, ref }) => (
          <div
            ref={ref}
            className={styles["card__flag"]}
            style={{ backgroundColor: "lightslategray" }}
          />
        )}
        actual={({ imageProps }) => (
          <div
            className={styles["card__flag"]}
            style={{ backgroundImage: `url(${imageProps.src})` }}
          />
        )}
      />
      <section className={styles["card__data"]}>
        <p>
          <strong>{name}</strong>
        </p>
        <p>
          <strong>Population: </strong>
          {population}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
      </section>
    </Link>
  );
};

export default CountryCard;
