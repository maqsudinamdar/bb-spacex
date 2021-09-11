import React from 'react';

import SubHeader from '../../components/SubHeader';
import Table from '../../components/Table';

import './SpaceXDashboard.scss'

class SpaceXDashboard extends React.Component {

    componentDidMount() {
        console.log('componentDidMount')
    }

    render() {
        return (
            <div className="container">
                <SubHeader />
            </div>
        );

    };

};

export default SpaceXDashboard;