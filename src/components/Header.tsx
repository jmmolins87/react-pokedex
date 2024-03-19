import React from 'react';

// * Styles
import styles from './styles/header.module.css';

type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
};

const Header = ({ query, setQuery }: HeaderProps ) => {
    return (
        <header className={ styles.header }>
            <input
                type="text"
                onChange={(event) => setQuery( event.target.value )}
                value={ query }
                className={ styles.input }
                placeholder='Search a Pokemon' />
        </header>
    );
};

export default Header;