import * as React from 'react';
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {fetchCountriesByCodeThunk, selectDetails} from "../../store/details.slice";
import {useEffect} from "react";

interface Props {
}

const Detail: React.FC<Props> = (props) => {

    let details = useSelector(selectDetails);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchCountriesByCodeThunk(id));

        return () => {
            details = {}
        }
    },[]);

    console.log('d', details);

    return (
        <div>
            Detail works ! {id}


        </div>
    );
};

export default Detail;

