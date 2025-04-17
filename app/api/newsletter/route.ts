import subscribeNewsletter from '@/lib/helper/newsletter/helper';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    console.log("here");
    try {
        const { email } = await req.json();
        console.log(email);
        const result = await subscribeNewsletter(email);

        if (result.error) {
            return NextResponse.json({ error: result.error }, { status: 400 });
        }

        return NextResponse.json({ message: 'Successfully subscribed to the newsletter!' }, { status: 200 });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
        console.error('Error in API route:', errorMessage);
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
