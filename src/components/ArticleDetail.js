import React, { useState, useEffect } from'react';

const ArticleDetail = ({ article }) => {
    return (
        <div>
            <h1>{article.title}</h1>
            <img src={article.urlToImage} alt={article.title} style={{height: '200px', objectFit: 'cover'}} />
            <p>{ article.content }</p>
            <a href={article.url} target='_blank' rel='noopener noreferrer' className="btn btn-primary">Go to the original source.</a>
        </div>
    );
}

export default ArticleDetail;