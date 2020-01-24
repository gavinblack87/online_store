import React, { Component } from 'react';
import ShoeListItem from './ShoeListItem';
import '../../styles/Search.css';
import '../../styles/tables.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredShoes: [],
            search: ''
        };
        this.updateSearch = this.updateSearch.bind(this);
    }
    updateSearch(event){
        this.setState({search: event.target.value.substr(0,20)});
    }
    render(){
        let filteredShoes = this.props.shoes.filter((shoe) => {
          return (
            (shoe.make.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || shoe.model.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
          )
        })
        return(
            <>
            <div className="search-container" align="center">
              <div className="contact-form">
                <label >Search Shoes</label>
                <input type="text"
                value={this.state.search}
                onChange={this.updateSearch}/>
              </div>
            </div>
      
              <div className="results">
                      {filteredShoes.map((shoe, index) => {
                        return<ShoeListItem shoe={shoe} key={index}/>
                      })}
              </div>
            </>
          )
        }
}


export default Search