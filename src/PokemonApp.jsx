import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {

    const dispatch = useDispatch();
    const {isLoading, pokemons=[], page} = useSelector(state => state.pokemons)

    useEffect(() => {
        dispatch(getPokemon());
    }, []);


    return (
        <>
           <h1>Pokemon App</h1>
           <hr/>
           <span>Loading: { isLoading ? 'true':'false'}</span>
           <ul>
               {
                pokemons.map(({name})=>(<li key={name}>{name}</li>))
               }
           </ul>
           <button
             disabled={isLoading}
             onClick={()=>dispatch(getPokemon(page))}
           >
            Get More Pokemons
           </button>
        </>
    );
}


