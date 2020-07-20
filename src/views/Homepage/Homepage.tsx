import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {Country, Search, Select} from "../../components";
import {Header} from "../../components";

import styles from "./Homepage.module.scss";
import Detail from "../../components/Detail/Detail";

interface Props {
}

const Homepage: React.FunctionComponent<Props> = () => {
    return (
        <Router>
            <div className={styles["homepage__wrapper"]}>
                <nav className={styles["homepage__nav"]}>
                    <Header text="Where in the world?"/>
                    {/* @Todo: make dark mode working */}
                    <p>dark mode</p>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <section className={styles["homepage__filters"]}>
                            <Search/>
                            <Select/>
                        </section>
                        <Country/>
                    </Route>
                    <Route path="/:id" children={<Detail/>} />
                </Switch>
            </div>
        </Router>
    );
};

export default Homepage;
