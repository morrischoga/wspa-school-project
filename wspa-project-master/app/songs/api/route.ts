import { NextResponse } from 'next/server';

export async function GET() {
    const response = await fetch(' https://api.airtable.com/v0/appdFkySTxDV6HylP/songs', {
        headers: {
            Authorization: `Bearer ${process.env.token}`,


        },
        next: {
            revalidate: 10,
        }
    });
    const data = await response.json();

    return NextResponse.json(data.records);
}