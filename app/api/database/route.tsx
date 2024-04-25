import { EmailTemplate } from "@/app/files/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// CANCELADO
export async function POST(req: Request, res: Response) {
    const body = await req.json();
    
}