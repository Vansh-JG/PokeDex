import React, { useState, useEffect } from 'react';

// const MODAL_STYLES = {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: '#FFF',
//     padding: '50px',
//     zIndex: 1000
// };
const MODAL_STYLES = {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '20px',
    zIndex: 1000,
    maxWidth: '90%', 
    minWidth: '300px', 
    minHeight: '200px', 
    borderRadius: '10%',
};

const OVERLAY_STYLES = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
};

export default function InfoModal({ pokeurl, capitalName }) {
    const [isOpen, setIsOpen] = useState(false);
    const [pokemonData, setPokemonData] = useState(null); 
    
    useEffect(() => {
        if (isOpen) {
            fetchData();
        }
    }, [isOpen]);


    const fetchData = async () => {
        try {
            const response = await fetch(pokeurl);
            const data = await response.json();
            setPokemonData(data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }
    return (
        <>
            {isOpen && (
                <>
                    <div style={OVERLAY_STYLES} onClick={() => setIsOpen(false)} />
                    <div style={MODAL_STYLES}>
                        {pokemonData ? (
                            <>
                            <div className="place-content-center">
                                <h2 className="text-center">{capitalName}</h2>
                                <p>Abilities: {pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
                            </div>
                            <div className='flex justify-center items-center'>
                            <button className="place-content-center btn bg-primary" onClick={() => setIsOpen(false)}>Close</button>
                            </div>
                            </>
                            ) :

                            (<span className="loading loading-bars loading-lg" />)}
                     
                    </div>
                </>
            )}
            {!isOpen && (
                <div className="card-actions justify-center">
                    <button onClick={() => setIsOpen(true)} className="btn btn-outline btn-neutral">Info</button>
                </div>
            )}
        </>
    );
}
