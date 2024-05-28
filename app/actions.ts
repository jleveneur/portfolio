'use server';

import { EmailTemplate } from '@/components/email-template';
import { personalInfo } from '@/constants';
import { render } from '@react-email/render';
import { Resend } from 'resend';

interface State {
  error: string | null;
  success: boolean;
}

export const sendEmail = async (prevState: State, formData: FormData) => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'portfolio@jleveneur.pro',
      to: personalInfo.email,
      subject: 'Portfolio Contact Form Submission',
      html: render(EmailTemplate({ name, email, message })),
    });

    return {
      error: null,
      success: true,
    };
  } catch (error) {
    return {
      error: (error as Error).message,
      success: false,
    };
  }
};
