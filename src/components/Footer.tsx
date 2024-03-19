import React from 'react';
import { Link } from 'react-router-dom';

// * Styles
import styles from './styles/footer.module.css';

// * Assets
import PokemonPic from '../assets/pikachu.png';
import LocationPic from '../assets/pointer.png';
import ItemsPic from '../assets/pokeball.png';


const Footer = () => {
    return (
        <footer className={ styles.footer }>
            <Link
                onClick={( event ) => event.preventDefault()} 
                to="/pokemons" 
                className={ styles.footerLink }>
                <img 
                    src={ PokemonPic } 
                    alt="Pikachu" 
                    title="Pokemons" 
                    className={ styles.footerIcon } />
                <span>Pokemons</span>
            </Link>
            <Link
                onClick={( event ) => event.preventDefault()} 
                to="/items" 
                className={ styles.footerLink }>
                <img 
                    src={ ItemsPic } 
                    alt="Pokeball" 
                    title="Items" 
                    className={ styles.footerIcon } />
                <span>Items</span>
            </Link>
            <Link
                onClick={( event ) => event.preventDefault()} 
                to="/location" 
                className={ styles.footerLink }>
                <img 
                    src={ LocationPic } 
                    alt="Location" 
                    title="Map" 
                    className={ styles.footerIcon } />
                <span>Map</span>
            </Link>
        </footer>
    );
};

export default Footer;