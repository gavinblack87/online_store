import React, {Component} from 'react';
import Shoes from '../components/shoes/Shoes';
import ShoeFilter from '../components/shoes/ShoeFilter'
import {BrowserRouter as Router} from 'react-router-dom';
import InfoNav from '../components/navigation/InfoNav';

class MensShoesContainer extends Component {


    render() {
        return (
            <Router>
                <React.Fragment>
                    <InfoNav />
                    <ShoeFilter />
                    <Shoes shoes={this.props.shoes} />
                </React.Fragment>
            </Router>
        )
    }
}

export default MensShoesContainer;