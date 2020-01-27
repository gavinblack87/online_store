import React, {Component} from 'react';
import ShoePage from '../components/shoes/ShoePage';

import {BrowserRouter as Router} from 'react-router-dom';
import InfoNav from '../components/navigation/InfoNav';

class ShoeContainer extends Component {
    constructor(props){
        super(props);
       
    }


    render() {
        return (
            <Router>
                <React.Fragment>
                    <InfoNav />
                    <ShoePage />
                </React.Fragment>
            </Router>
        )
    }
}

export default ShoeContainer;