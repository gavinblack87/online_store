import React, {Component} from 'react';
import Mens from './MensShoesContainer';
import Header from '../components/home/Header';
import NavBar from '../components/navigation/NavBar';
import Search from '../components/search/Search';
import Shoes from '../components/shoes/Shoes';
import Banners from '../components/banners/banners.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RollingImage from '../components/Carousel/Carousel';
import shoes from '../data/data.json'
import StickyFooter from '../components/navigation/Footer';

class HomePageContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            shoes: shoes
        }
    }



// componentDidMount() {
//     const url = 'http://localhost:8080/api/shoes';
//     fetch(url)
//         .then(res => res.json())
//         .then(shoes => this.setState({
//             shoes: shoes
//         }))
//         .catch(err => console.error);
//     }


    render(){
        return(
            <Router>
                <React.Fragment>
                    
                    <NavBar />
                    <Route exact path="/mens" component={Mens}/>
                    <Route exact path="/womens" component={Mens}/>
                    <Route exact path="/kids" component={Mens}/>
                    <Route exact path="/"/>
                    
                    <RollingImage/>
                    
                    
                    <StickyFooter />
                </React.Fragment>
            </Router>
        )
    }
}
export default HomePageContainer;
