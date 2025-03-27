"use client";
import React from 'react'
import { useState } from "react";

export default function Inputs() {
    // Variáveis de estado
    const [numero_A, setNumero_A] = useState(0);
    const [numero_B, setNumero_B] = useState(0);
    const [resultado, setResultado] = useState(0);

    // Função Calcular
    function Somar() {
        const numA = numero_A || 0;
        const numB = numero_B || 0;

        console.log(numA, numB);
        setResultado(numA + numB);
        console.log("Estou do Lado do Cliente...");
        // Chama a função do lado do servidor corretamente

    }
    function Subtrair() {
        const numA = numero_A || 0;
        const numB = numero_B || 0;

        console.log(numA, numB);
        setResultado(numA - numB);
    }
    function Mult() {
        const numA = numero_A || 0;
        const numB = numero_B || 0;

        console.log(numA, numB);
        setResultado(numA * numB);
    }
    function Dividir() {
        const numA = numero_A || 0;
        const numB = numero_B || 0;

        console.log(numA, numB);
        setResultado(numA / numB);
    }
    function Limpar() {
        setNumero_A("");
        setNumero_B("");
        setResultado("");
    }


    return (
        <div className="w-1/2 h-1/2 flex-col flex items-center justify-center space-y-3">
            <h1 className="font-bold text-blue-400 text-2xl text-center">Calculadora com NextJS</h1>
            <input type="number" value={numero_A} onChange={(e) => setNumero_A(parseFloat(e.target.value))}
                className="bg-white w-[205px] h-[50px] border-2 border-blue-400 text-black text-center rounded-xl" />
            <input type="number" value={numero_B} onChange={(e) => setNumero_B(parseFloat(e.target.value))}
                className="bg-white w-[205px] h-[50px] rounded-xl border-2 border-blue-400 text-black text-center"></input>
            <span className="font-bold text-blue-400">Resultado:</span>
            <input type="number" value={resultado} readOnly
                className="bg-white w-[205px] h-[50px] rounded-xl border-2 border-blue-400 text-black text-center"></input>
            <div className="space-x-9">
                <button onClick={Somar}
                    className="w-[80px] h-[50px] font-bold text-lg  bg-white text-black border-2 border-blue-400 rounded-xl">+</button>
                <button onClick={Subtrair}
                    className=" border-2 border-blue-400 w-[80px] h-[50px] bg-white text-black font-bold text-lg rounded-xl">-</button>
            </div>
            <div className="space-x-8">
                <button onClick={Mult}
                    className=" border-2 border-blue-400 w-[80px] h-[50px] bg-white text-black font-bold text-xl rounded-xl">*</button>
                <button onClick={Dividir}
                    className=" border-2 border-blue-400 w-[80px] h-[50px] bg-white text-black font-bold text-lg rounded-xl">/</button>
            </div>
            <button onClick={Limpar}
                className="border-2 border-red-600 w-[200px] h-[50px] text-red-600 rounded-xl">Limpar</button>
            <h1 className="w-[200px] h-[40px] text-white text-center p-1 rounded-xl font-sans border-2 border-blue-400">Laura Rocha</h1>
        </div>
    );
}
