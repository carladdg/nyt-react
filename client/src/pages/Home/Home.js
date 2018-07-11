import React, { Component } from "react";
import API from "../../utils/API";
import Card from "../../components/Card";
import Article from "../../components/Article";
import "./Home.css";

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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.getArticles();
    }
    
    render = () => (
        <React.Fragment>
            <Card cardTitle="Search">
                <form className="text-center">
                    <div className="form-group">
                        <label htmlFor="topic">Topic</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="topic" 
                            name="q" 
                            value={this.state.q}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="start-year">Start Year</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="start-year" 
                            name="start_year" 
                            value={this.state.start_year}
                            onChange={this.handleInputChange}
                        />                    </div>
                    <div className="form-group">
                        <label htmlFor="end-year">End Year</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="end-year" 
                            name="end_year" 
                            value={this.state.end_year}
                            onChange={this.handleInputChange}
                        />                    </div>
                    <button className="btn btn-warning" onClick={this.handleFormSubmit}>Search</button>
                </form>
            </Card>

            <Card cardTitle="Results">
                <ul className="list-group list-group-flush">
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
                </ul>
            </Card>
            <Card cardTitle="Saved">
                <ul className="list-group list-group-flush">
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
                </ul>
            </Card>
        </React.Fragment>
    )
}

export default Home;