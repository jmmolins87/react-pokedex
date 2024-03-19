import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// * Fetch
import { fetchPokemons } from './../api/fetch-pokemons';

// * Styles
import styles from './styles/pokemons.module.css';

// * Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

// * Types
import { Pokemon } from '../types/types';

// * Utils
import { waitFor } from '../utils/utils';


const Pokemons = () => {

    const [ query, setQuery] = useState('');
    const [ pokemons, setPokemons ] = useState<Pokemon[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>( false );

    useEffect(() => {
        const fetchAllPokemons = async () => {
            setIsLoading( true );
            await waitFor( 1000 );
            const allPokemons = await fetchPokemons();
            setPokemons( allPokemons );
            setIsLoading( false );
        };
        fetchAllPokemons();
    }, []);

    if( isLoading || !pokemons ) {
        return <LoadingScreen />
    }

    const filterPokemons = pokemons?.slice( 0, 151 ).filter(( pokemon ) => {
        return pokemon.name.toLowerCase().match( query.toLowerCase());
    });

    return (
        <>
            <Header query={ query } setQuery={ setQuery } />
            <main className={ styles.pokemonsMain }>
                <nav>
                    { filterPokemons?.slice( 0, 151 ).map(( pokemon ) => {
                        return (
                            <Link 
                                key={ pokemon.id } 
                                to={ `/pokemons/${ pokemon.name.toLowerCase() }`} 
                                className={ styles.listItem }>
                                <img 
                                    src={ pokemon.imgSrc } 
                                    alt={ pokemon.name }
                                    title={ pokemon.name }
                                    className={ styles.listItemIcon } />
                                <div className={ styles.listItemText }>
                                    <span>{ pokemon.name }</span>
                                    <span>{ pokemon.id }</span>
                                </div>
                            </Link>
                        );
                    })}
                </nav>
            </main>
            <Footer />
        </>
    );
};

export default Pokemons;