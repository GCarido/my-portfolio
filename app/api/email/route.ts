import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'gcards.rf.gd',
      to: ['geraldcastcarido@gmail.com'],
      subject: 'Portfolio Email Received',
      react: EmailTemplate({ firstName: name, email, message }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}