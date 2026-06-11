import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        await request.json();

        // データベース保存は行わず、常に正常終了としてレスポンスを返します
        return NextResponse.json({ 
            success: true, 
            message: 'Database save is disabled' 
        }, { status: 200 });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
