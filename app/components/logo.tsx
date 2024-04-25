import Image from "next/image";

export default function Logo() {
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                <Image src="/img/logo.png" height={124} width={280} className="" alt="" />
            </h1>
        </>
    )
}