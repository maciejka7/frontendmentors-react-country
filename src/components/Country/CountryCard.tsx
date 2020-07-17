import * as React from "react";
import styles from "./CountryCard.module.scss";

export interface CountryBasicData {
  name?: string;
  population?: string;
  region?: string;
  capital?: string;
  alpha3Code?: string;
}

interface Props {
  flagSrc: string;
  data: CountryBasicData;
}

const CountryCard: React.FunctionComponent<Props> = ({ flagSrc, data }) => {
  const { name, capital, region, population } = data;

  return (
    <div className={styles["card"]}>
      <div
        className={styles["card__flag"]}
        style={{ backgroundImage: `url(${flagSrc})` }}
      />
      <div />
      <section>
        <p>
          <strong>{name}</strong>
        </p>
        <p>
          <strong>Population:</strong>
          {population}
        </p>
        <p>
          <strong>Region</strong>
          {region}
        </p>
        <p>
          <strong>Capital</strong>
          {capital}
        </p>
      </section>
    </div>
  );
};

export default CountryCard;
