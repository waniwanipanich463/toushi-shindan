
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { DiagnosisResult } from '@/types';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const result = body as DiagnosisResult;

        if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
            console.warn('Supabase not configured, skipping save.');
            return NextResponse.json({ success: true, message: 'Skipped DB save' }, { status: 200 });
        }

        const { data, error } = await supabase
            .from('diagnosis_results')
            .insert([
                {
                    type: result.type,
                    scores: result.scores,
                    created_at: new Date().toISOString(),
                }
            ])
            .select();

        if (error) {
            console.error('Supabase error:', error);
            // Don't fail the request if DB save fails, just log it
            return NextResponse.json({ success: true, warning: error.message }, { status: 200 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
