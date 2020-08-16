import React from "react";
import { Link } from "react-router-dom";
import styles from "./BorderCountries.module.scss";

interface Props {
  borders: string[];
}

const BorderCountries = ({ borders }: Props) => {
  return (
    <div>
      <p>
        Border countries:
        {borders.map((country: string) => (
          <Link
            key={country}
            className={styles.borderCountiresButton}
            to={`/${country}`}
          >
            <strong> {country} </strong>
          </Link>
        ))}
      </p>
    </div>
  );
};

export default BorderCountries;
