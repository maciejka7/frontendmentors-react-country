import React from "react";
import styles from "./DetailInfo.module.scss";
import {
  DetailsLanguages,
  DetailsCurrency,
} from "../../store/details.interfaces";

interface Props {
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  topLevelDomain: [];
  currencies: DetailsCurrency[];
  languages: DetailsLanguages[];
}

const DetailInfo = ({
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
}: Props) => {
  return (
    <div className={styles.detailInfo}>
      <div>
        <p>
          Native name: <strong>{nativeName}</strong>
        </p>
        <p>
          population: <strong>{population}</strong>
        </p>

        <p>
          Region: <strong>{region}</strong>
        </p>
        <p>
          Subregion: <strong>{subregion}</strong>
        </p>
        <p>
          Capital: <strong>{capital}</strong>
        </p>
      </div>
      <div>
        {topLevelDomain && (
          <p>
            Top level domain:{" "}
            {topLevelDomain.map((domain) => (
              <strong key={domain}>{domain}</strong>
            ))}
          </p>
        )}
        {currencies && (
          <p>
            Currencies:{" "}
            {currencies.map((currency) => (
              <strong key={currency.code}>{currency.name}</strong>
            ))}{" "}
          </p>
        )}
        {languages && (
          <p>
            Languages:
            <strong>
              {languages.map((lang) => (
                <span key={lang.iso639_2}> {lang.name}</span>
              ))}
            </strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default DetailInfo;
