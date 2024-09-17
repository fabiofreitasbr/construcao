import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import ContentLinks from "../Parts/dados/contentLinks";

export default function Redes() {
    return (
        <>
            
            <div className="my-4 flex md:flex-row flex-col gap-x-4 rounded-xl p-2">
                <a href={ContentLinks.email} target="_blank">
                    <div className="my-2 md:my-4 flex text-base font-medium text-blue-900 justify-center items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray-border-gray-400 h-5 w-5 text-xl mx-2" />
                        <div className="mx-2">{ContentLinks.emailShow}</div>
                    </div>
                </a>
                <a href={ContentLinks.whatsapp} target="_blank">
                    <div className="my-4 flex base-xl font-medium text-blue-900 justify-center items-center">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-gray-border-gray-400 h-5 w-5 text-xl mx-2" />
                        <div className="mx-2">{ContentLinks.whatsappShow}</div>
                    </div>
                </a>
            </div>
        </>
    )
}