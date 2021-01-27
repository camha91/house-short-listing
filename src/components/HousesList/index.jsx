import React from 'react';
import PropTypes from 'prop-types';
import House from '../House';


HousesList.propTypes = {
    houses: PropTypes.array,
};

function HousesList(props) {
    const { houses } = props;

    return (
        <div className="houses-list">
            {houses.map((house, i) => <House key={i} house={house} />)}
        </div>
    );
}

export default HousesList;
