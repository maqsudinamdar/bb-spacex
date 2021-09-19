import React from 'react';
import { connect } from 'react-redux';

import { listLaunches } from '../../actions';

import SubHeader from '../../components/SubHeader';
import Table from '../../components/Table';


import './SpaceXDashboard.scss'

class SpaceXDashboard extends React.Component {

    constructor() {
		super();
		this.state = {
			selectValue: {}, 
            filterData: [
                {
                  id: 'all',
                  value: 'All Launches'    
                },
                {
                  id: 'success',
                  value: 'Successfull'    
                },
                {
                  id: 'failed',
                  value: 'Failed'    
                },
                {
                  id: 'upcoming',
                  value: 'Upcoming'    
                },
            ]
		};
	}

    onFilterChange = (selectedValue) => {
        console.log(selectedValue);
        this.setState({ selectValue: selectedValue });
    }

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
                } else if ( value.launch_success ) {
                    item['status'] = 'Success';
                } else {
                    item['status'] = 'Failed';
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
                <SubHeader 
                    selectValue={this.state.selectValue}
                    filterData={this.state.filterData}
                    onSelectChange={this.onFilterChange}
                />
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