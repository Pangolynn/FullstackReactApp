import {Link} from "react-router-dom";
import {ArticleListType} from "../types.tsx";



export default function ArticleList({ articles }: ArticleListType) {
    return (
        <>
        {articles.map(a => (
            <Link to={`/article/${a.name}`} key={a.name}>
                <h3>{a.title}</h3>
                <p>{a.content[0].substring(0, 150)}</p>
            </Link>
        ))}
        </>
    )
}