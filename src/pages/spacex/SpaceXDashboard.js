import React from 'react';
import { connect } from 'react-redux';

import { listLaunches } from '../../actions';

import SubHeader from '../../components/SubHeader';
import Table from '../../components/Table';

import './SpaceXDashboard.scss'

class SpaceXDashboard extends React.Component {

    componentDidMount() {
        this.props.listLaunches();
    }

    prepareData(response) {
        
        let data = [];

        if(response) {
            for (const [key, value] of Object.entries(response) ) {

                let item = {};
    
                item['id'] = value.flight_number;
                item['launch_date_utc'] = value.launch_date_utc;
                item['location'] = value.launch_site.site_name;
                item['mission_name'] = value.mission_name;
                item['orbit'] = value.rocket.second_stage.payloads[0].orbit;
                item['rocket_name'] = value.rocket.rocket_name;
                if(value.upcoming) {
                    item['status'] = 'Upcoming';
                    item['style'] = { backgroundColor: '#FEF3C7', color: '#FEF3C7' };
                } else if ( value.launch_success ) {
                    item['status'] = 'Success';
                    item['style'] = { backgroundColor: '#DEF7EC', color: '#DEF7EC' };
                } else {
                    item['status'] = 'Failed';
                    item['style'] = { backgroundColor: '#FDE2E1', color: '#FDE2E1' };
                }
    
                data.push(item);
            }
        }       

        return data;
    }

    render() {


        const tableHeaders = ["No", "Launched (UTC)", "Location", "Mission", "Orbit", "Launch Status", "Rocket"];

        const tableBodies = [
            `id`,
            `launch_date_utc`,
            `location`,
            `mission_name`,
            `orbit`,
            `status`,
            `rocket_name`
        ];


        let data = this.prepareData(this.props.launches);

        return (
            <div className="container">
                <SubHeader />
                <Table
                    data={data}
                    tableHeaders={tableHeaders}
                    tableBodies={tableBodies}
                />
            </div>
        );

    };

};

const mapStateToProps = (state) => {
    return { launches: Object.values(state.launch)[0] };
};

export default connect(
    mapStateToProps,
    { listLaunches }
)(SpaceXDashboard);