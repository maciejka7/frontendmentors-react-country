import * as React from 'react';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {DetailsInfo} from '../../store/details.interfaces'
import {
    fetchCountriesByCodeThunk,
    selectCurrentDetailsCountryAlphaCode,
    selectDetails
} from "../../store/details.slice";
import styles from './Detail.module.scss'

interface Props {
}

const Detail: React.FC<Props> = () => {

    const details: DetailsInfo = useSelector(selectDetails);
    const countryCode = useSelector(selectCurrentDetailsCountryAlphaCode);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {

        if (countryCode !== id) {
            dispatch(fetchCountriesByCodeThunk(id));
        }

    }, []);
    const {flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders} = details;

    console.log(borders);

    return (
        <div className={styles['detail__wrapper']}>
            <section className={styles['detail__flag']} style={{backgroundImage: `url(${flag})`}}/>
            <section className={styles['detail__infoWrapper']}>
                <h1> {name} </h1>
                <div className={styles['detail__infoDetails']}>
                    <div>
                        <p>Native name: <strong>{nativeName}</strong></p>
                        <p>population: <strong>{population}</strong></p>

                        <p>Region: <strong>{region}</strong></p>
                        <p>Subregion: <strong>{subregion}</strong></p>
                        <p>Capital: <strong>{capital}</strong></p>
                    </div>
                    <div>
                        {topLevelDomain &&
                        <p>Top level domain: {
                            topLevelDomain.map(domain => <strong key={domain}>{domain}</strong>)
                        }</p>
                        }
                        {currencies &&
                        <p>Currencies: {
                            currencies.map(currency => <strong key={currency.code}>{currency.name}</strong>)
                        } </p>
                        }
                        {languages &&
                        <p>Languages:
                            <strong>
                                {languages.map(lang => <span key={lang.iso639_2}> {lang.name}</span>)}
                            </strong>
                        </p>
                        }

                    </div>
                </div>
                <div>
                    {borders &&
                    <p>Border countries:
                        {borders.map(country => <strong className={styles['detail__borderButton']}
                                                        key={country}> {country}</strong>)}
                    </p>
                    }
                </div>
            </section>

        </div>
    );
};

export default Detail;

