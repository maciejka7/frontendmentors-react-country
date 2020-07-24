import * as React from 'react';
import styles from './BackButton.module.scss';

interface Props {
    label?: string
    onClick: () => void
}

const BackButton: React.FC<Props> = ({label, ...rest}) => {

    return (
        <button className={styles.button} {...rest}>{label}</button>
    );
};

export default BackButton;

