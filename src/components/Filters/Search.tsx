import * as React from "react";
import { useDispatch } from "react-redux";
import { filterCountriesForHomePage } from "../../store/country.slice";
interface Props {}

const Search: React.FunctionComponent<Props> = () => {
  const dispatch = useDispatch();

  const handleFilter = (e : React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterCountriesForHomePage(e.target.value));
  };

  return (
    <div>
      <form action="">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilter(e)}
          type="text"
          placeholder="Search for the country"
        />
      </form>
    </div>
  );
};

export default Search;
