import Image from "next/image";
import React from 'react'

export default function Foto() {
    return (
        <div className=" w-[450px] h-[350px]">
            <Image
                src="/calculer.png"
                alt="imageeemmm"
                width={450}
                height={350}
            />

        </div>
    )
}
