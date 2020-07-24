import * as React from 'react';
import styles from './Loading.module.scss'

interface Props {
}

const Loading: React.FC<Props> = () => {

    return (
        <div className={styles.loadingBox}>
            <div className={styles.bar}/>
        </div>
    );
};

export default Loading;

