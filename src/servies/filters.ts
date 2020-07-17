export type FiltersArray = Array<
  "alpha3Code" | "flag" | "name" | "population" | "region" | "capital"
>;

export const createFliedsStringFromArray = (filtersArray: FiltersArray) =>
  filtersArray.join(";");
