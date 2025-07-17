import {useParams} from "react-router-dom";
import articles from "../articleContent.ts";

export default function Article() {
    const { name } = useParams();

    const article =
        articles.find(a => a.name === name);

    return (
        article ?
            <>
                <h1>{article.title}</h1>
                {article.content
                    .map(p => <p key={p}>{p}</p>)
                }
            </>
            : <h1>Article Not Found</h1>


    );
}