import { EmailTemplate } from "@/app/files/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// CANCELADO
export async function POST(req: Request, res: Response) {
    const body = await req.json();
    try {
        const data = await resend.emails.send({
            from: 'Contato - <noreply@meusite.com.br>',
            to: ['contato@meusite.com.br'],
            subject: 'Construção - Contato',
            react: EmailTemplate({ email: body.email }),
        });

        return Response.json({data: "teste"});
    } catch (error) {
        return Response.json({ error });
    }
}