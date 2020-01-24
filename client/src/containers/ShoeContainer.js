import React, {Component} from 'react';
import ShoePage from '../components/shoes/ShoePage';
import shoes from '../data/data.json'
import {BrowserRouter as Router} from 'react-router-dom';
import InfoNav from '../components/navigation/InfoNav';

class ShoeContainer extends Component {
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
                    <ShoePage shoes={shoes}/>
                </React.Fragment>
            </Router>
        )
    }
}

export default ShoeContainer;