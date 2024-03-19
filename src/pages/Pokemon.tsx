import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// * Components
import Footer from './../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

// * Styles
import styles from './styles/pokemon.module.css';

// * Types
import { PokemonDetails } from '../types/types';

// * Utils
import { waitFor } from '../utils/utils';

// * Imgs
import PokeballPic from './../assets/pokeball.png';
import { fetchPokemon } from '../api/fetch-pokemon';


const Pokemon = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>( false );
    const [ pokemon, setPokemon ] = useState<PokemonDetails>();
    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getPokemon() {
            setIsLoading( true );
            await waitFor( 300 ); 
            const fetchedPokemon = await fetchPokemon( name as string );
            setPokemon( fetchedPokemon )
            setIsLoading( false );
        }
        getPokemon();
    }, [ name ]);

    if( isLoading || !pokemon ) {
        return <LoadingScreen />
    }

    return (
        <>
            <button 
                onClick={() => navigate( -1 )}
                className={ styles.pokeballButton }
                aria-label="Go back">
                <img 
                    src={ PokeballPic }
                    alt="Pokeball" 
                    title='Pockeball' 
                    className={ styles.pokeballImg } />
                Go back
            </button>
            <div className={ styles.pokemon }>
                <main className={ styles.pokemonInfo }>
                    <h2 className={ styles.pokemonTitle }>{ pokemon?.name?.toUpperCase() }</h2>
                    <h3 className={ styles.pokemonNum }>Nr. { pokemon?.id }</h3>
                    <div className={ styles.wrapPokemonImg }>
                        <img 
                            src={ pokemon?.imgSrc }
                            alt="{ pokemon?.name }" 
                            title='{ pokemon?.name }' 
                            className={ styles.pokemonInfo } />
                    </div>
                    <h4>HP: { pokemon?.hp }</h4>
                    <h4>Attack: { pokemon?.attack }</h4>
                    <h4>Defense: { pokemon?.defense }</h4>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Pokemon;