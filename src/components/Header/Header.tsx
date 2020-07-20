import * as React from "react";
import { Link } from 'react-router-dom'
import styles from "./Header.module.scss";

interface Props {
  text?: string;
}

const Header: React.FunctionComponent<Props> = ({ text }) => {
  return <Link className={styles.header} to='/'><h1 >{text}</h1></Link>;
};

export default Header;
