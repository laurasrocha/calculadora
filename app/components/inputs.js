import React from 'react'

export default function Inputs() {
    return (
        <div className="w-1/2 h-1/2 flex-col flex items-center justify-center space-y-3">
            <h1 className="font-bold text-orange-400 text-2xl">Calculadora com NextJS</h1>
            <input className="bg-white w-[250px] h-[50px] rounded border-2 border-orange-400"></input>
            <input className="bg-white w-[250px] h-[50px] rounded border-2 border-orange-400"></input>
            <input className="bg-white w-[250px] h-[50px] rounded border-2 border-orange-400"></input>
            <button className="border-2 border-white w-[250px] h-[50px]">Somar</button>
            <button className="border-2 border-red-600 w-[250px] h-[50px] text-red-600">Limpar</button>
            <h1>Dev's Laura Rocha</h1>
        </div>
    )
}
