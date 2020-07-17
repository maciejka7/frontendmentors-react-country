import * as React from "react";
import styles from "./Header.module.scss";

interface Props {
  text?: string;
}

const Header: React.FunctionComponent<Props> = ({ text }) => {
  return <h1 className={styles.header}>{text}</h1>;
};

export default Header;
