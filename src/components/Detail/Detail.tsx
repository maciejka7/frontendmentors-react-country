import * as React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailsInfo } from "../../store/details.interfaces";
import {
  fetchCountriesByCodeThunk,
  selectCurrentDetailsCountryAlphaCode,
  selectDetails,
  selectIsDetailsLoading,
} from "../../store/details.slice";
import styles from "./Detail.module.scss";

import BackButton from "../Buttons/BackButton";
import Loading from "../LoadingBox/Loading";
import BorderCountries from "./BorderCountries";
import DetailInfo from "./DetailInfo";

interface Props {}

const Detail: React.FC<Props> = () => {
  const details: DetailsInfo = useSelector(selectDetails);
  const countryCode = useSelector(selectCurrentDetailsCountryAlphaCode);
  const isLoading = useSelector(selectIsDetailsLoading);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [detailsInfo, setDetailsInfo] = useState<null | {} | any>(null);
  const { flag, name, borders } = details;

  const handleGoBack = () => {
    history.goBack();
  };

  useEffect(() => {
    if (countryCode !== id) {
      dispatch(fetchCountriesByCodeThunk(id));
    }
  }, [countryCode, dispatch, id]);

  useEffect(() => {
    setDetailsInfo(details);
  }, [details]);

  return (
    <>
      <section className={styles["detail"]} style={{ paddingBottom: 0 }}>
        <BackButton onClick={handleGoBack} label={"Back"} />
      </section>
      <section className={styles["detail"]}>
        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles["detail__wrapper"]}>
            <section
              className={styles["detail__flag"]}
              style={{ backgroundImage: `url(${flag})` }}
            />

            <section className={styles["detail__infoWrapper"]}>
              <h1> {name} </h1>

              {detailsInfo ? <DetailInfo {...detailsInfo} /> : null}

              {borders && borders.length ? (
                <BorderCountries borders={borders} />
              ) : null}
            </section>
          </div>
        )}
      </section>
    </>
  );
};

export default Detail;
