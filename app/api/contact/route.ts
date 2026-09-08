import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const TO = 'Justinarstrange@gmail.com'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, company, email, message } = body

  if (!name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: true, note: 'no_api_key' })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  await resend.emails.send({
    from: 'Hollinger AI <onboarding@resend.dev>',
    to: TO,
    replyTo: email,
    subject: `New Enquiry — ${name}${company ? ` (${company})` : ''}`,
    text: [
      `Name: ${name}`,
      `Company: ${company || '—'}`,
      `Email: ${email}`,
      `Message: ${message || '—'}`,
    ].join('\n'),
  })

  return NextResponse.json({ ok: true })
}
