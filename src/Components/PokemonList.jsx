import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import PreviewCard from './PreviewCard';
import InfoModal from "./InfoModal"

export default function PokemonList() {
    const [pokemonData, setPokemonData] = useState({});
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(true)


    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setPokemonData(data);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setLoading(true)
        let api = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;
        fetchApiData(api);

    }, [offset]);

    if (loading) {
        return <div className='flex justify-center items-center h-[80vh] w-screen'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    return (
        <div className='bg-slate-900'>
            <div className="flex flex-wrap justify-center">
                {pokemonData && pokemonData.results &&
                    pokemonData.results.map((pokemon, index) => {
                        const capitalizedPokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                        // const pokename = pokemon.name;
                        // console.log(pokemon.url);
                        const url = pokemon.url;
                        const num = pokemon.url.split("/")[6];
                        return (
                            <div key={index} className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-base-100 shadow-xl m-10 md:m-2">
                                <PreviewCard capitalizedPokemonName={capitalizedPokemonName} pokeNum={num} />
                                <div className="card-body p-2 w-full">
                                    <p className="text-gray-700 text-right pb-0">{num}</p>
                                    <h2 className="card-title justify-center pt-0">{capitalizedPokemonName}</h2>
                                    <InfoModal pokeurl={url} capitalName={capitalizedPokemonName} />
                                </div>
                            </div>

                        );
                    })}
            </div>
            <Pagination onNextClick={() => { if (offset <= 1302) { setOffset(offset + 20) } }} onPrevClick={() => { if (offset > 0) { setOffset(offset - 20) } }} />
        </div>
    );
}
