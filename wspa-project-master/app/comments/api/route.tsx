// GET /comments/api
import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
    const response = await fetch('https://api.airtable.com/v0/appdFkySTxDV6HylP/comments', {
        headers: {
            Authorization: `Bearer ${process.env.token}`,
        },
        next: {

            revalidate: 0,
        }
    });
    const data = await response.json();

    return NextResponse.json(data.records);
}

export async function POST(request: NextRequest) {
    const responseData = await request.json();
    console.log('Plain data: ', responseData);

    const response = await fetch('https://api.airtable.com/v0/appdFkySTxDV6HylP/comments', {
        headers: {
            Authorization: `Bearer ${process.env.token}`,
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            records: [{
                fields: {
                    contents: responseData.commentContent
                }
            }]
        }),
    });
    const data = await response.json();

    return NextResponse.json(data);
}
