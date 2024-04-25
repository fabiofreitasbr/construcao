export default function Contador() {
    

    // const data = '2024/05/23';
    // const falta = (new Date(data).getTime() - new Date().getTime()) / 1000;
    // const segundos = Math.round(falta % 60);
    // const minutos = Math.round(falta / 60 % 60);
    // const horas = Math.round(falta / 60 / 60 % 24);
    // const dias = Math.round(falta / 60 / 60 / 24);
    // const divs = document.querySelectorAll('.count');

    // setInterval(function () {
    //     if (segundos == 0) { segundos = 60; minutos--; }
    //     if (minutos == 0) { minutos = 60; horas--; }
    //     if (horas == 0) { horas = 24; dias--; }
    //     segundos--;
    //     var contador = [dias, horas, minutos, segundos].forEach(function (parcela, i) {
    //         divs[i].innerHTML = parcela;
    //     });

    // }, 1000);
    return (
        <>
            <div className="my-4 w-full flex justify-center gap-x-2 md:gap-x-4">
                <div className="text-center w-14 sm:w-28">
                    <div className="count bg-white my-4 p-2 md:p-4 text-xl md:text-4xl font-medium text-blue border-2 border-orange rounded-md">0</div>
                    <div className="bg-orange-500 text-[8px] sm:text-xs md:text-base my-2 px-2 md:px-4 py-2 rounded-full text-black">DIAS</div>
                </div>
                <div className="text-center w-14 sm:w-28">
                    <div className="count bg-white my-4 p-2 md:p-4 text-xl md:text-4xl font-medium text-blue border-2 border-orange rounded-md">0</div>
                    <div className="bg-orange-500 text-[8px] sm:text-xs md:text-base my-2 px-2 md:px-4 py-2 rounded-full text-black">HORAS</div>
                </div>
                <div className="text-center w-14 sm:w-28">
                    <div className="count bg-white my-4 p-2 md:p-4 text-xl md:text-4xl font-medium text-blue border-2 border-orange rounded-md">0</div>
                    <div className="bg-orange-500 text-[8px] sm:text-xs md:text-base my-2 px-2 md:px-4 py-2 rounded-full text-black">MINUTOS</div>
                </div>
                <div className="text-center w-14 sm:w-28">
                    <div className="count bg-white my-4 p-2 md:p-4 text-xl md:text-4xl font-medium text-blue border-2 border-orange rounded-md">0</div>
                    <div className="bg-orange-500 text-[8px] sm:text-xs md:text-base my-2 px-2 md:px-4 py-2 rounded-full text-black">SEGUNDOS</div>
                </div>
            </div>
        </>
    )
}