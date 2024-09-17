"use client"
import { useState } from "react";

export default function Contador() {
    const data = 'September 15, 2026 00:00:00 GMT-03:00';
    const [falta, setFalta] = useState(0);
    const segundos = Math.floor(falta % 60);
    const minutos = Math.floor(falta / 60 % 60);
    const horas = Math.floor(falta / 60 / 60 % 24);
    const dias = Math.floor(falta / 60 / 60 / 24);

    setInterval(function () {
        setFalta((new Date(data).getTime() - new Date().getTime()) / 1000);
    }, 1000);
    return (
        <>
            <div className="my-4 w-full flex justify-center gap-x-2 md:gap-x-4">
                <div className="text-center w-14 sm:w-28">
                    <div className="count bg-white my-4 p-2 md:p-4 text-xl md:text-4xl font-medium text-blue-900 border-2 border-gray-400 rounded-md">{dias}</div>
                    <div className="bg-blue-900 text-[8px] text-xs my-2 px-2 md:px-4 py-2 rounded-full text-white">DIAS</div>
                </div>
                <div className="text-center w-14 sm:w-28">
                    <div className="count bg-white my-4 p-2 md:p-4 text-xl md:text-4xl font-medium text-blue-900 border-2 border-gray-400 rounded-md">{horas}</div>
                    <div className="bg-blue-900 text-[8px] text-xs my-2 px-2 md:px-4 py-2 rounded-full text-white">HORAS</div>
                </div>
                <div className="text-center w-14 sm:w-28">
                    <div className="count bg-white my-4 p-2 md:p-4 text-xl md:text-4xl font-medium text-blue-900 border-2 border-gray-400 rounded-md">{minutos}</div>
                    <div className="bg-blue-900 text-[8px] text-xs my-2 px-2 md:px-4 py-2 rounded-full text-white">MINUTOS</div>
                </div>
                <div className="text-center w-14 sm:w-28">
                    <div className="count bg-white my-4 p-2 md:p-4 text-xl md:text-4xl font-medium text-blue-900 border-2 border-gray-400 rounded-md">{segundos}</div>
                    <div className="bg-blue-900 text-[8px] text-xs my-2 px-2 md:px-4 py-2 rounded-full text-white">SEGUNDOS</div>
                </div>
            </div>
        </>
    )
}