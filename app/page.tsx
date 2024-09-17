import Image from "next/image";
import Contador from "./components/contador";
import Redes from "./components/redes";
import Formulario from "./components/formulario";
import Titulo from "./components/titulo";
import Logo from "./components/logo";

export default function Home() {
    return (
        <main>
            <div className="flex container mx-auto p-4 h-screen items-center justify-center flex-col">
                <Logo />
                <Titulo />
                <Contador />
                <Formulario />
                <Redes />
            </div>
        </main>
    );
}
