import React from 'react'


export default function PokeNav() {
  return (


    <div className="navbar bg-red-500">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href='https://www.pokemon.com/us'>
        <img src={require("../assets/logo/Pokelogo.png")} alt="Logo" className="d-inline-block align-top" width={100} height={40} />
        </a>
      </div>
      <div className="flex-none gap-3">
        <div className="form-control">
          <input type="text" placeholder="Pokemon Name" className="input input-bordered w-24 md:w-auto" />
        </div>
      </div>
    </div>

  )
}
