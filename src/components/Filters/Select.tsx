import * as React from "react";
import {useState} from "react";
import { useDispatch } from 'react-redux'
import { filterCountriesByRegionName } from '../../store/country.slice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import styles from './Select.module.scss'


const regionList = ['World', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

interface Props {}

const Select: React.FunctionComponent<Props> = () => {

    const [isSelectOpen, setSelectOpen] = useState<boolean>(false);
    const [selectedRegion, setSelectedRegion] = useState<string>('');
    const [isRegionSelected, setRegionSelected] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleRegionSelection = (region: string) : void => {

        if(region === 'World') {
            setSelectedRegion('');
            setRegionSelected(false);
            dispatch(filterCountriesByRegionName(''));
            setSelectOpen(false)
        } else {
            setSelectedRegion(region);
            setRegionSelected(true);
            dispatch(filterCountriesByRegionName(region));
            setSelectOpen(false)
        }
    };

  return (
      <section className={styles['select']}>
          <div className={styles['select__label']} onClick={() => setSelectOpen(!isSelectOpen)}>
              <p>{!isRegionSelected ? 'Filter by region' : selectedRegion !== '' ? `Selected: ${selectedRegion}` : null} </p>
              {isSelectOpen ? <FontAwesomeIcon icon={faAngleUp} />  : <FontAwesomeIcon icon={faAngleDown} /> }
          </div>

          {isSelectOpen &&
            <section className={styles['select__menu']}>
              <ul className={styles['select__list']}>
                  {regionList ? regionList.map( (regionName) => {
                      return (
                        <li
                            onClick={()=>handleRegionSelection(regionName)}
                            key={regionName}
                        >
                            {regionName}
                        </li>
                      )})
                  : null }
              </ul>
            </section>
          }
      </section>
  )
};

export default Select;
