import React from 'react';
import PropTypes from 'prop-types';
import './House.scss';

House.propTypes = {
    house: PropTypes.object,
    onHouseClick: PropTypes.func,
};

House.defaultProps = {
    house: {},
    onHouseClick: null,
}

function House(props) {
    const { house, onHouseClick } = props;

    return (
        <table>
            <tr>
                <th>Date</th>
                <th>Address</th>
                <th>Bed(s)</th>
                <th>Bath(s)</th>
                <th>Sqft</th>
                <th>Status</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>{house.ds}</td>
                <td>{house.address}</td>
                <td>{house.bds}</td>
                <td>{house.ba}</td>
                <td>{house.sqft}</td>
                <td>{house.status}</td>
                <td>${house.price}</td>
            </tr>
        </table>
    );
}

export default House;
