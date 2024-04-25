
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Redes() {
    return (
        <>
            <div className="my-4 flex md:flex-row flex-col gap-x-4 rounded-xl p-2">
                <a href="mailto:contato@goodsun.com.br" target="_blank">
                    <div className="my-2 md:my-4 flex text-base font-medium hover:text-white hover:bg-orange-500 group rounded-lg p-2 text-blue justify-center items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="text-orange-500 group-hover:text-white h-5 w-5 mx-2" />
                        <div className="mx-2">contato@goodsun.com.br</div>
                    </div>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5521964868290" target="_blank">
                    <div className="my-2 md:my-4 flex text-base font-medium hover:text-white hover:bg-orange-500 group rounded-lg p-2 text-blue justify-center items-center">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-orange-500 group-hover:text-white h-5 w-5 mx-2" />
                        <div className="mx-2">(21) 96486-8290</div>
                    </div>
                </a>
            </div>
        </>
    )
}