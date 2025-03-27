import React from 'react'

export default function Home() {
    //variáveis 





    return (
        <div className="bg-white w-screen h-screen flex-col space-y-3">
            <div className="bg-blue-400 w-full h-[50px]"></div>
            <h1 className="font-bold font-mono text-xl text-center text-black">Calculadora de IMC</h1>
            <div className="w-full h-[400px] flex-col flex justify-center space-y-6">
                <input type="number"
                    className="w-[200px] h-[50px] border-2 border-blue-500 ml-12 rounded-xl p-2 text-black" placeholder="Seu Peso:"></input>
                <input type="number"
                    className="w-[200px] h-[50px] border-2 border-blue-500 ml-12 rounded-xl p-2 text-black" placeholder="Sua Altura:"></input>
                <button className="bg-blue-400 text-black w-[200px] h-[50px] ml-12 rounded-xl font-bold font-mono text-lg border-2 border-blue-500">Calcular IMC</button>
                <input
                    className="w-[200px] h-[50px] border-2 border-blue-500 ml-12 rounded-xl p-2 text-black"></input>
            </div>
            <div className="flex justify-center text-end h-[130px]">
                <h1 className="text-black font-mono text-xl">2025</h1>
            </div>

        </div>
    )
}
