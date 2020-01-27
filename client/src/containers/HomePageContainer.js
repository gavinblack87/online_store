import React, {Component} from 'react';
import Mens from './MensShoesContainer';
import Shoe from './ShoeContainer'
import NavBar from '../components/navigation/NavBar';
import Search from '../components/search/Search';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RollingImage from '../components/Carousel/Carousel';
import Footer from '../components/navigation/Footer'
import MensShoesContainer from './MensShoesContainer';
import Banner from '../components/banners/banners'
import ShoeContainer from './ShoeContainer';


class HomePageContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            shoes: []
        }
        this.renderMain = this.renderMain.bind(this);
        this.renderMens = this.renderMens.bind(this);
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

renderMain(props) {
    return (
        <>
        <RollingImage/>
        <hr width="50%" padding-top="50%"/>
        <Banner/>
        </>
    )
}

renderMens(props) {
    return (
        <>
        <MensShoesContainer shoes={this.state.shoes}/>
        </>
    )
}



    render(){
        return(
            <Router>
                <React.Fragment>
                    
                    <NavBar />
                    <Route exact path="/mens" render={this.renderMens}/>
                    <Route exact path="/mens/nike" component={Shoe}/>
                    <Route exact path="/kids" component={Mens}/>
                    <Route exact path="/" render={this.renderMain}/>
                    <Footer/>
                    
                </React.Fragment>
            </Router>
        )
    }
}
export default HomePageContainer;
