import React from 'react';
import PropTypes from 'prop-types';
import './House.scss';

House.propTypes = {
    house: PropTypes.object,
    onClick: PropTypes.func,
};

House.defaultProps = {
    house: {},
    onClick: null,
}

function House(props) {
    const { house, onClick } = props;

    return (

        <div className="centerwrapper">
            <div onClick={onClick} className="square">
                <li>{house.ds}</li>
                <li>{house.address}</li>
                <li>{house.bds} beds</li>
                <li>{house.ba} bath</li>
                <li>{house.sqft} sqft</li>
                <li>{house.status}</li>
                <li>${house.price}</li>
            </div>
        </div>

    );
}

export default House;
