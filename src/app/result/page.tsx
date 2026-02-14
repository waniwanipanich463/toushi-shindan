import { Metadata } from 'next';
import ResultClient from './ResultClient';
import { getTypeContent } from '@/lib/typesContent';

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    props: Props,
): Promise<Metadata> {
    const searchParams = await props.searchParams;
    const typeCode = (searchParams.type as string) || 'UNKNOWN';
    const content = getTypeContent(typeCode);

    return {
        title: `私の投資スタイルは「${content.name}」でした！ | 投資スタイル診断`,
        description: `投資スタイル診断の結果：${content.description} あなたにぴったりの投資法をチェックしよう。`,
        openGraph: {
            title: `私の投資スタイルは「${content.name}」です！`,
            description: content.description,
            images: [content.characterImage],
        },
        twitter: {
            card: 'summary_large_image',
            title: `私の投資スタイルは「${content.name}」です！`,
            description: content.description,
            images: [content.characterImage],
        },
    };
}

export default function ResultPage() {
    return <ResultClient />;
}
