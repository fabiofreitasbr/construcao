"use client"
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Formulario() {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [colorMessage, setColorMessage] = useState('bg-orange-500');
    
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    function onSubmitSend(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (email == null || email.length < 5) { setMessage('O e-mail digitado não é válido'); }
        else if (!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) { setMessage('O e-mail digitado não é válido'); }
        else {
            setMessage('Aguarde...');
            console.log(email);
            axios.post('https://api.estudiogrape.com.br/goodsun/email/create', { email: email })
            .then(function (response) {
                setMessage(response.data.message);
                if (response.data.status == true) { setColorMessage('bg-green-500'); } else { setColorMessage('bg-orange-500'); }
            })
            .catch(function (error) { setMessage("Houve um erro ao enviar o e-mail"); });
        }
    }
    return (
        <>
            <div className="my-4 flex gap-x-4 border-2 bg-white border-orange rounded-xl p-2 md:p-6">
                <form onSubmit={onSubmitSend}>
                    <div className="flex justify-center flex-col md:flex-row">
                        <input type="text" value={email} onChange={handleEmail} placeholder="E-MAIL" className="bg-gray-100 rounded-full py-1 md:py-2 my-2 px-6 text-lg mx-4" />
                        <button className="bg-orange-500 rounded-full py-1 md:py-2 my-2 px-6 text-lg text-white mx-4 uppercase">Enviar</button>
                    </div>
                    {
                        (message != '') ? <div id="response-contact" className="w-full"><div className={'wpcf7-response-output w-full text-white my-2 p-2 uppercase text-center border-2 border-white  border-dashed ' + colorMessage} role="alert">{message}</div></div> : ''
                    }
                </form>
            </div>
        </>
    )
}