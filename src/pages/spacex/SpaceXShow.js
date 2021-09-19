import React from 'react';
import { connect } from 'react-redux';

import { getLaunch } from '../../actions';

import Modal from '../../components/Modal/index1';

import { getStatus } from '../../utils/helper';

import nasa from "../../assets/icons/nasa.png";
import wikipedia from "../../assets/icons/wikipedia.png";
import youtube from "../../assets/icons/youtube.png";

import './SpaceXShow.scss'

class SpaceXShow extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getLaunch(id);
    }


    renderModal () {
        console.log('renderModal')
        return (
            <div className="modal-wrapper">
                <div className="overlap-group1">
                    <div className="modal">

                        {this.renderHeader()}
                        {this.renderDetails()}
                        {this.renderList()}
                    </div>
                </div>
            </div>
        )
    }

    renderHeader() {
        return (
            <div className="modal-header">
                <img 
                    className="image-1"
                    src={this.props.launch.links.mission_patch}
                    alt=""
                />
                <div className="info">
                    <div className="frame-8">
                        <div className="frame-1">
                            <div className="mission-name valign-text-middle">
                                {this.props.launch.mission_name}

                                {/* <Badge>Success</Badge> */}

                            </div>
                        </div>

                        <div className="rocket-name valign-text-middle">
                            {this.props.launch.rocket.rocket_name}
                        </div>
                    </div>
                    <div className="links">
                        <a href={this.props.launch.links.article_link}>
                            <img 
                                className="nasaIcon"
                                src={nasa}
                                alt="nasa"
                            />
                        </a>
                        <a href={this.props.launch.links.wikipedia}>
                            <img 
                                className="icon"
                                src={wikipedia}
                                alt="wiki"
                            />
                        </a>
                        <a href={this.props.launch.links.video_link}>
                            <img 
                                className="icon"
                                src={youtube}
                                alt="youtube"
                            />
                        </a>
                    </div>
                </div>
            </div>
        )
    }


    renderDetails() {
        return (
            <>
                <p className="modal-description valign-text-middle-desc">
                <span className="inter-normal-charade-14px">
                            {this.props.launch.details}
                        </span>
                        <span className="description-link">Wikipedia</span>
                </p>
            </>
        )
    }


    renderList() {
        return (

            <div className="modal-list-info">
                <Row 
                    keyName="Flight Number"
                    value={this.props.launch.flight_number}
                />
                <Row 
                    keyName="Mission Name"
                    value={this.props.launch.mission_name}
                />
                <Row 
                    keyName="Rocket Type"
                    value={this.props.launch.rocket.rocket_type}
                />
                <Row 
                    keyName="Rocket Name"
                    value={this.props.launch.rocket.rocket_name}
                />
                <Row 
                    keyName="Manufacturer"
                    value={this.props.launch.rocket.second_stage.payloads[0].manufacturer}
                />
                <Row 
                    keyName="Nationality"
                    value={this.props.launch.rocket.second_stage.payloads[0].nationality}
                />
                <Row 
                    keyName="Launch Date"
                    value={this.props.launch.launch_date_utc}
                />
                <Row 
                    keyName="Payload Time"
                    value={this.props.launch.rocket.second_stage.payloads[0].payload_type}
                />
                <Row 
                    keyName="Orbit"
                    value={this.props.launch.rocket.second_stage.payloads[0].orbit}
                />
                <Row 
                    keyName="Launch Site"
                    value={this.props.launch.launch_site.site_name}
                />
            </div>
        )
    }
    

    render() {
        if(this.props.launch) {

            return (
                <div>
                    SpaceXShow
                    
                    <Modal 
                        header={this.renderModal()}
                    />
                    
                </div>
            )
        }
        return 'Wait'
    }

}


class Row extends React.Component{

    render() {
        
        const { keyName, value, className} = this.props;
        console.log(keyName);
        return (
            <div className={`spacex-modal-row ${className || ""}`}>
                <div className="spacex-modal-row-item">
                    <div className="key valign-text-middle inter-medium-scarpa-flow-14px">
                        {keyName}
                    </div>
                    <div className="value valign-text-middle inter-medium-scarpa-flow-14px">
                        {value}
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return { launch: state.launch[ownProps.match.params.id] };
}

export default connect(
    mapStateToProps,
    { getLaunch }
)(SpaceXShow);