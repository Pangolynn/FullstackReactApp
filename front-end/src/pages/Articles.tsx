import articles from "../articleContent.ts";
import ArticleList from "./ArticleList.tsx";

export default function Articles() {
    return (
        <>
            <h1>Articles</h1>
            <ArticleList articles={articles}/>
        </>
    );
}