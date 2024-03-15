import React from 'react';

import styles from './header.module.css';

type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
};

const Header = ({ query, setQuery }: HeaderProps ) => {
    return (
        <header className={ styles.header }>
            <input
                type="text"
                value={ query }
                className={ styles.input }
                placeholder='Search a Pokemon' />
        </header>
    );
};

export default Header;