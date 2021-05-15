import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    const listArticles = posts.map((list) => (
        <Article
            key={list.id}
            title={list.title}
            date={list.date}
            preview={list.preview}
            minutes={list.minutes}
        />
    ));
    return (
        <main>
            {listArticles}
        </main>
    );
}

export default ArticleList;