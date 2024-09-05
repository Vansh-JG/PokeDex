import { useState } from "react"
import { twMerge } from "tailwind-merge";

const PreviewCard = ({capitalizedPokemonName, pokeNum}) => {

    const [load, setLoad] = useState(true);

    return(
    <>
            {load &&  (
                <div className="w-full flex justify-center items-center">
                    <span className="loading loading-dots loading-lg" />
                </div>
            )}
            <figure className={"bg-[#F2F2F2]"}>
                <img
                className={twMerge("object-contain h-36 w-auto", load ? "hidden": null)}
                    // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokeNum}.gif`}
                    alt={capitalizedPokemonName} 
                    onLoad={() => {setLoad(false)}}
                />
            </figure>
        </>
    )
}

export default PreviewCard