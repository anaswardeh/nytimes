import React from "react";
import API from "../../utils/API";
import Container  from "../../components/Container";
import { List, ListItem } from '../../components/List';
import firebase from '../../config/constants';
import DeleteBtn from '../../components/DeleteBtn';

class Articles extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        articles: [],
        title: "",
        date: "",
        url: "",
        image: "",
        uid: firebase.auth().currentUser.uid, 
      };
    }


componentDidMount() {
    this.loadArticles();
  }
  
loadArticles = id => {
      API.getArticles(this.state.uid)
        .then(res =>
          // this.setState({ articles: res.data, title: "", date: "", url: "", image:"" })
          this.setState({articles: res.data})
        )
        .catch(err => console.log(err));
    };


deleteArticle = id => {
  API.deleteArticle(id)
  .then(res => this.loadArticles())
  .catch(err => console.log(err));
  };
  

  
    render() {

      return (
        <Container>
                <h1>Articles On My List</h1> 
                <List>

                 {this.state.articles.map(article => {
                     return (
                      <ListItem key={article._id} id={article._id}>
                        <a href={article.url} target="_blank">
                          <strong>
                            {article.title}
                          </strong>
                        </a>
                        <br />
                        <strong> The Article was published on: </strong> {article.date.substring(0,10)}
                        <img alt="placeholder" src={"https://static01.nyt.com/" + article.image} />
                        <br />
                        <strong> The aritcle was saved on </strong>
                        {article.saveNow.substring(0,10)}
                        <br />



            <DeleteBtn onClick={() => this.deleteArticle(article._id)} />

                       </ListItem> 
                     );
                   })}
                 </List>
        </Container>
      );
    }
  }
  
  export default Articles;
  