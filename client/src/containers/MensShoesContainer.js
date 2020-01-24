import React, {Component} from 'react';
import Shoes from '../components/shoes/Shoes';
import shoes from '../data/data.json'
import ShoeFilter from '../components/shoes/ShoeFilter'
import {BrowserRouter as Router} from 'react-router-dom';
import InfoNav from '../components/navigation/InfoNav';

class MensShoesContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            shoes: shoes
        }
    }


    render() {
        return (
            <Router>
                <React.Fragment>
                    <InfoNav />
                    <ShoeFilter />
                    <Shoes shoes={shoes} />
                </React.Fragment>
            </Router>
        )
    }
}

export default MensShoesContainer;