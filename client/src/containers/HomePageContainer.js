import React, {Component} from 'react';
import Header from '../components/home/Header';
import NavBar from '../components/navigation/NavBar';
import Search from '../components/search/Search';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class HomePageContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            shoes: []
        }
    }



componentDidMount() {
    const url = 'http://localhost:8080/api/shoes';
    fetch(url)
        .then(res => res.json())
        .then(shoes => this.setState({
            shoes: shoes
        }))
        .catch(err => console.error);
    }

    render(){
        return(
            <Router>
                <React.Fragment>
                    <Header />
                    <NavBar />
                    <Search shoes={this.state.shoes}/>
                </React.Fragment>
            </Router>
        )
    }
}
export default HomePageContainer;
