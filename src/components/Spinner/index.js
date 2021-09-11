import React from 'react';

const Spinner = (props) => {

    return (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">
                { props.message }
            </span>
        </div>
    );
}

Spinner.defaultProps = {
    message: 'Loading..'
}

export default Spinner;