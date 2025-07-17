export type ArticleType = {
    title: string,
    name: string,
    content: Array<string>
}

export type ArticleListType = {
    articles: Array<ArticleType>
}