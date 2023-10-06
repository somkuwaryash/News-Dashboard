import React, { useState, useEffect } from'react';
import { fetchNews } from '../utils/api';
import CategorySelection from '../components/CategorySelection';
import { Pagination } from 'react-bootstrap';
import ArticleDetail from '../components/ArticleDetail';

function HomePage() {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('general');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedArticle, setSelectedArticle] = useState(null);

    const renderPagination = () => {
        let items = [];
        const totalPages = Math.ceil(articles.length / 10);

        for (let i = 1; i <= totalPages; i++) {
            items.push(
                <Pagination.Item key={i} active={i === currentPage} onClick={() => setCurrentPage(i)}>
                    {i}
                </Pagination.Item>
            );
        }
        return(
            <Pagination>
                <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
                {items}
                <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
            </Pagination>
        )
    }

    useEffect(() => {
        const savedCategory = localStorage.getItem('category');
        if (savedCategory) {
            setCategory(savedCategory);
        }
    }, []);

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        localStorage.setItem('category', newCategory);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedArticles = await fetchNews(category);
                setArticles(fetchedArticles);
            } catch (error) {
                console.log("Error Fetching News:", error);
            }
        }

    fetchData();

}, [category]);

return(
    selectedArticle ? <ArticleDetail article={selectedArticle} /> :
    <div>
        <CategorySelection category={category} onCategoryChange={setCategory} />
        <div className="container mt-4">
    <div className="row">
        {articles.map((article) => (
            <div key={article.url} className="col-lg-4 col-md-6 mb-4" onClick={() => setSelectedArticle(article)}>
                <div className="card h-100">
                    <img src={article.urlToImage} alt={article.title} className="card-img-top" style={{height: '200px', objectFit: 'cover'}} />
                    <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">{article.description}</p>
                        <a href={article.url} target='_blank' rel='noopener noreferrer' className="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
{renderPagination()}


    </div>
);
}

export default HomePage;