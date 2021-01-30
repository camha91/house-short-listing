import React from 'react';
import PropTypes from 'prop-types';
import House from '../House';


HousesList.propTypes = {
    houses: PropTypes.array,
    onHouseClick: PropTypes.func,
};

function HousesList(props) {
    const { houses, onHouseClick } = props;

    function handleHouseClick(house) {
        if (onHouseClick) {
            onHouseClick(house);
        }
    };

    return (
        <div className="container">
            {houses.map((house, i) =>
                <House
                    key={i}
                    house={house}
                    onClick={() => handleHouseClick(house)}
                />)}
        </div>
    );
}

export default HousesList;
