import React from 'react';

// * Img
import Pokedex from './../assets/pokedex.png';

// * Styles
import styles from './styles/loadingScreen.module.css'

const LoadingScreen = () => {
    return (
        <div className={ styles.loadingScreen }>
            <img 
                src={ Pokedex } 
                alt='Pokedex' 
                title='Pokedex' 
                className={ styles.loadingScreenIcon } />
        </div>
    );
};

export default LoadingScreen;