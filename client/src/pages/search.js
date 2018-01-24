import React from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import Banner from "../components/Banner";
// import Footer from '../components/Footer/'


class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        q: "",
        begin_date: Date,
        end_date: Date,
        order: "oldest",
        results: [],
        error: ""
      };
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    // componentDidMount() {
    //   this.handleFormSubmit();
    // }
    
    
    //   // Loads all books  and sets them to this.state.books
    // loadArtciles = () => {
    // API.getArticles()
    //   .then(res =>
    //     this.setState({ results: res.data.response.docs  })
    //   )
    //   .catch(err => console.log(err));
    // };


    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value 
      });
  }

  

  
    handleFormSubmit = event => {
      event.preventDefault();

      API.searchArticle(this.state.q, this.state.begin_date, this.state.end_date, this.state.order)
        .then(res => {
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          } 
          this.setState({ results: res.data.response.docs , error: "" });
        })
        .catch(err => this.setState({ error: err.message }));


      };
    render() {
      return (
        <Container style={{ minHeight: "80%" }}>
            <Banner />
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}/>

          <SearchResults results={this.state.results} />
        </Container>
      );
    }
  }

export default Search;
