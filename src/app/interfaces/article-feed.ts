export interface ArticleFeed {
    category: string[];
    title: string;
    subTitle: string;
    pubDate: string;
    description: string;
    media ? : string;
    creator ? : string;
}