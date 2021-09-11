import React from 'react';
import { connect } from 'react-redux';

import { listLaunches } from '../../actions';

import SubHeader from '../../components/SubHeader';
import Table from '../../components/Table';

import './SpaceXDashboard.scss'

class SpaceXDashboard extends React.Component {

    componentDidMount() {
        console.log('componentDidMount')
        this.props.listLaunches();
    }

    render() {
        console.log(this.props.launches);
        return (
            <div className="container">
                <SubHeader />
            </div>
        );

    };

};

const mapStateToProps = (state) => {
    return { launches: Object.values(state.launches) };
};

export default connect(
    mapStateToProps,
    { listLaunches }
)(SpaceXDashboard);