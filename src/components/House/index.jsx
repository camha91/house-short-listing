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
            <div onClick={onClick} className="list-card">
                {/* <article className="list-card"> */}
                <div className="list-card-top">
                    <a
                        href={house.href}
                        className="list-card-img"
                        tabIndex="-1"
                        aria-hidden="false"
                    >
                        <img
                            src={house.img}
                            alt={house.address}
                        />
                    </a>
                </div>
                <div className="list-card-info">
                    <a href={house.href}>
                        <address className="list-card-addr">{house.address}</address>
                    </a>
                    <div className="list-card-heading">
                        <div className="list-card-price">${house.price}</div>
                        <ul className="list-card-details">
                            <li>{house.bds} bds, </li>
                            <li>{house.ba} ba, </li>
                            <li>{house.sqft} sqft - </li>
                            <li>{house.status}</li>
                        </ul>
                    </div>
                </div>
                {/* </article> */}
            </div>
        </div>

    );
}

export default House;
