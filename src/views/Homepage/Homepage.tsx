import * as React from "react";
import { Country, Search, Select } from "../../components";
import { Header } from "../../components";

import styles from "./Homepage.module.scss";

interface Props {}

const Homepage: React.FunctionComponent<Props> = () => {
  return (
    <div className={styles["homepage__wrapper"]}>
      <nav className={styles["homepage__nav"]}>
        <Header text="Where in the world?" />
        {/* @Todo: make dark mode working */}
        <p>dark mode</p>
      </nav>

      <section className={styles["homepage__filters"]}>
        <Search />
        <Select />
      </section>
      <Country />
    </div>
  );
};

export default Homepage;
