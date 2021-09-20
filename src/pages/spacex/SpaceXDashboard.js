import React from 'react';
import { connect } from 'react-redux';

import { 
    listLaunches, 
    successLaunches,
    upcomingLaunches 
} from '../../actions';

import { formatDate } from '../../utils/helper';

import SubHeader from '../../components/SubHeader';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';

import SpaceXModal from './SpaceXModal';

import './SpaceXDashboard.scss'

class SpaceXDashboard extends React.Component {


    state = {
        selectValue: {
            id: 'all',
            value: 'All Launches'    
        }, 
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
        ],
        activePage: 1,
        showModal: false,
        clickedRowId: null,
        tableLoading: false
    };


    componentDidMount() {
        this.props.listLaunches();
    }


    componentDidUpdate(prevProps, prevState) {

        console.log('componentDidUpdate', this.state)



        let selectedValue = this.state.selectValue;
        let activePage= this.state.activePage;

        if (prevState.activePage !== this.state.activePage || prevState.selectValue !== this.state.selectValue) {
            let offset = (activePage-1) * 10;

            this.setState({ tableLoading: true });

            if(selectedValue.id === 'all'){
                this.props.listLaunches(offset);
            }
            else if(selectedValue.id === 'success'){                
                this.props.successLaunches(offset);
            }
            else if(selectedValue.id === 'failed'){
                this.props.successLaunches(offset, false);
            }
            else if(selectedValue.id === 'upcoming'){
                this.props.upcomingLaunches(offset);
            }

            this.setState({ tableLoading: false})
        }

        if(prevState.showModal){
            this.setState({ showModal: false})
        }
    }


    onDropdownChange = (selectedValue) => {

 
        if(selectedValue === 'all'){
            this.setState({ selectValue: this.state.filterData[0] });
        }
        else if(selectedValue === 'success'){
            this.setState({ selectValue: this.state.filterData[1] });
        }
        else if(selectedValue === 'failed'){
            this.setState({ selectValue: this.state.filterData[2] });
        }
        else if(selectedValue === 'upcoming'){
            this.setState({ selectValue: this.state.filterData[3] });
        }

        this.setState({ activePage: 1 });

    }


    onPaginationChange = (pageNumber) => {

        console.log('onPaginationChange', 'selectedValue: '+ this.state.selectValue, 'activePage:'+ this.state.activePage);

        this.setState({activePage: pageNumber});
    }


    onRowClick = (id) => {

        this.setState({ showModal: true });
        this.setState({ clickedRowId: id })

        console.log('SpaceXDashboard onRowClick', id, this.state )
    }


    prepareData(response) {
        
        let data = [];

        if(response) {
            for (const [key, value] of Object.entries(response) ) {

                let item = {};
    
                item['id'] = value.flight_number;
                item['launch_date_utc'] = formatDate(value.launch_date_utc);
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
        console.log({'SpaceXDashboard render': {
            state: this.state, 
            props: this.props.launches,
            data: data,
        } })
        return (
            <div className="container">
                <SubHeader 
                    selectValue={this.state.selectValue}
                    filterData={this.state.filterData}
                    onSelectChange={this.onDropdownChange}
                />
                <Table
                    data={data}
                    tableHeaders={tableHeaders}
                    tableBodies={tableBodies}
                    onRowClick={this.onRowClick}
                    loading={this.state.tableLoading}
                />
                <Pagination
                    activePage={this.state.activePage}
                    countPerPage={10}
                    totalCount={this.props.dataCount}
                    onChange={this.onPaginationChange}
                />

                { 
                    this.state.showModal ? 
                    <SpaceXModal 
                        launch={this.props.launches.find(i => i.flight_number === this.state.clickedRowId)}
                        // onHide={this.setState({ showModal: false })}
                    /> : 
                    null 
                }
                
            </div>
        );

    };

};

const mapStateToProps = (state) => {

    let dataCount = state.launch.dataCount
    if(dataCount) {
        dataCount = parseInt(dataCount);
    }
    return { launches: Object.values(state.launch.data), dataCount: dataCount };
};

export default connect(
    mapStateToProps,
    { 
        listLaunches,
        successLaunches,
        upcomingLaunches
    }
)(SpaceXDashboard);