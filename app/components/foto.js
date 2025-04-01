import Image from "next/image";
import React from 'react'

export default function Foto() {
    return (

        <div className="w-full ">
            <div className="w-[450px] h-[350px]">
                <Image
                    src="/imgcalc.svg"
                    alt="imagem"
                    width={450}
                    height={350}
                    className="rounded-2xl"
                />
            </div>
        </div>
    )
}
