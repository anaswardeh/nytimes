import React from "react";
import API from "../../utils/API";
import Container  from "../../components/Container";
import { List, ListItem } from '../../components/List';
import firebase from '../../config/constants'


class Articles extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        articles: [],
        title: "",
        date: "",
        url: "",
        image: "",
        uid: firebase.auth().currentUser.uid
      };
    }

componentDidMount() {
    this.loadArticles();
  }

    // Loads all books  and sets them to this.state.books
    loadArticles = id => {
      API.getArticles(this.state.uid)
        .then(res =>
          // this.setState({ articles: res.data, title: "", date: "", url: "", image:"" })
          this.setState({articles: res.data})
        )
        .catch(err => console.log(err));
    };


// Deletes a article from the database with a given id, then reloads articles from the db
deleteArticle = id => {
  API.deleteArticle(id)
  .then(res => this.loadArticles())
  .catch(err => console.log(err));
  };
  

  // Handles updating component state when the user types into the input field
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  

  
    render() {

      return (
        <Container>
                <h1>Articles On My List</h1> 
                <List>
                 {this.state.articles.map(article => { 
                     return (
                      <ListItem key={article._id} >
                        <a href={article.url} target="_blank">
                          <strong>
                            {article.title}
                          </strong>
                        </a>
                        <br />
                        {article.date.substring(0,10)}

                        <img alt="placeholder" src={"https://static01.nyt.com/" + article.image} />
                        
                        <br />
                        <strong> The aritcle was saved on </strong>
                        {article.saveNow.substring(0,10)}
                         {/* <DeleteBtn onClick={() => this.deleteArticle(article._id)} /> */}
                       </ListItem> 
                     );
                   })}
                 </List>
        </Container>
      );
    }
  }
  
  export default Articles;
  