import React from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import Banner from "../components/Banner";




class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        q: "",
        begin_date: Date,
        end_date: Date,
        results: [],
        error: ""
      };
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    //When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
      API.searchArticle()
        .then(res => this.setState({ results: res.data }))
        .catch(err => console.log(err));
    }
  
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

      API.searchArticle(this.state.q, this.state.begin_date, this.state.end_date)
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
  

// const Search = () =>
//   <div>
//     <Banner />
//     <Container>
//       <Row>
//         <Col size="md-12">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
//             aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius
//             natoque penatibus et magnis dis parturient montes, nascetur
//             ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at
//             et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
//             gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis
//             mi sollicitudin turpis semper, et interdum risus lobortis.
//             Vestibulum suscipit nunc non egestas tristique. Proin hendrerit
//             efficitur malesuada. Mauris lorem urna, sodales accumsan quam non,
//             tristique tempor erat. Nullam non sem facilisis, tempus tortor sit
//             amet, volutpat nisl. Ut et turpis non nunc maximus mollis a vitae
//             tortor. Pellentesque mattis risus ac quam laoreet cursus. Praesent
//             suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis
//             consequat mattis tortor vitae mattis.
//           </p>
//           <p>
//             Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum
//             porttitor. Sed malesuada molestie velit ac viverra. Quisque a
//             ullamcorper purus. Curabitur luctus mi ac mi hendrerit semper. Nulla
//             tincidunt accumsan lobortis. Mauris convallis sapien non nibh porta
//             accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum
//             egestas. Aliquam blandit mi eu urna scelerisque, vitae volutpat
//             ligula ultricies. Maecenas vel porta augue. Fusce mauris ex,
//             dignissim et lacinia ut, tempus eget nibh.
//           </p>
//           <p>
//             Etiam ut massa efficitur, gravida sapien non, condimentum sapien.
//             Suspendisse massa tortor, facilisis in neque sit amet, scelerisque
//             elementum tortor. Nullam eget nibh sit amet odio lobortis
//             ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris
//             et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non
//             mattis enim congue at. Proin mi lectus, ullamcorper id hendrerit eu,
//             ultricies vitae lacus. Nunc vehicula, erat eget laoreet condimentum,
//             felis ante malesuada leo, nec efficitur diam nisi eget nisi. Cras
//             arcu lacus, tristique in bibendum vitae, elementum eget lorem.
//             Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit
//             ante, nec faucibus libero. Sed ultrices lorem ex, eu facilisis
//             libero convallis ac. Vivamus id dapibus eros. Nullam tempor sem
//             rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
//             interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum
//             mauris quis, laoreet massa.
//           </p>
//           <p>
//             Etiam ut massa efficitur, gravida sapien non, condimentum sapien.
//             Suspendisse massa tortor, facilisis in neque sit amet, scelerisque
//             elementum tortor. Nullam eget nibh sit amet odio lobortis
//             ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris
//             et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non
//             mattis enim congue at. Proin mi lectus, ullamcorper id hendrerit eu,
//             ultricies vitae lacus. Nunc vehicula, erat eget laoreet condimentum,
//             felis ante malesuada leo, nec efficitur diam nisi eget nisi. Cras
//             arcu lacus, tristique in bibendum vitae, elementum eget lorem.
//             Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit
//             ante, nec faucibus libero. Sed ultrices lorem ex, eu facilisis
//             libero convallis ac. Vivamus id dapibus eros. Nullam tempor sem
//             rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
//             interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum
//             mauris quis, laoreet massa.
//           </p>

//           <p>
//             Etiam ut massa efficitur, gravida sapien non, condimentum sapien.
//             Suspendisse massa tortor, facilisis in neque sit amet, scelerisque
//             elementum tortor. Nullam eget nibh sit amet odio lobortis
//             ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris
//             et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non
//             mattis enim congue at. Proin mi lectus, ullamcorper id hendrerit eu,
//             ultricies vitae lacus. Nunc vehicula, erat eget laoreet condimentum,
//             felis ante malesuada leo, nec efficitur diam nisi eget nisi. Cras
//             arcu lacus, tristique in bibendum vitae, elementum eget lorem.
//             Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit
//             ante, nec faucibus libero. Sed ultrices lorem ex, eu facilisis
//             libero convallis ac. Vivamus id dapibus eros. Nullam tempor sem
//             rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
//             interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum
//             mauris quis, laoreet massa.
//           </p>

//         </Col>
//       </Row>
//     </Container>
//   </div>;

export default Search;
