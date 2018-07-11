import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";
import Article from "../../components/Article";

class Home extends Component {
    state = {
        articles: [],
        savedArticles: [],
        q: "",
        start_year: "",
        end_year: ""
    }

    componentDidMount = () => {
        this.getArticles();
        this.getSavedArticles();
    }

    getArticles = () => {
        API.getArticles({
            q: this.state.q,
            start_year: this.state.start_year,
            end_year: this.state.end_year
        })
            .then(res => this.setState({ articles: res.data }))
            .catch(err => console.log(err));
    }

    getSavedArticles = () => {
        API.getSavedArticles()
            .then(res => this.setState({ savedArticles: res.data }))
            .catch(err => console.log(err));
    }

    handleArticleSave = id => {
        const savedArticle = this.state.articles.find(article => article._id === id);
        API.saveArticle(savedArticle)
            .then(res => {
                this.getArticles();
                this.getSavedArticles();
            });
    }

    handleArticleDelete = id => {
        API.deleteArticle(id)
            .then(res => {
                this.getArticles();
                this.getSavedArticles();
            })
    }
    
    render = () => (
        <React.Fragment>
            <Card cardTitle="Results">
                {this.state.articles.map(article => (
                    <Article
                        key={article._id}
                        _id={article._id}
                        title={article.headline.main}
                        url={article.web_url}
                        date={article.pub_date}
                        handleClick={this.handleArticleSave}
                        handleDelete={this.handleArticleDelete}
                        buttonText="Save Article"
                        buttonColor="info"
                    />
                ))}
            </Card>
            <Card cardTitle="Saved">
                {this.state.savedArticles.map(article => (
                    <Article
                        key={article._id}
                        _id={article._id}
                        title={article.title}
                        url={article.url}
                        date={article.date}
                        handleClick={this.handleArticleDelete}
                        buttonText="Delete Article"
                        buttonColor="secondary"
                    />
                ))}
            </Card>
        </React.Fragment>
    )
}

export default Home;