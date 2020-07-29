import React from "react";
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
          <strong className={styles.borderCountiresButton} key={country}>
            {" "}
            {country}
          </strong>
        ))}
      </p>
    </div>
  );
};

export default BorderCountries;
