import React, { useState } from 'react';
import PropTypes from 'prop-types';

HouseForm.propTypes = {
    onSubmit: PropTypes.func,
};

HouseForm.defaultProps = {
    onSubmit: null,
}

function HouseForm(props) {
    const { onSubmit } = props;
    const [houseData, setHouseData] = useState({
        ds: date,
        bds: 0,
        ba: 0,
        sqft: 0,
        yearBuilt: 0,
        status: '',
        price: 0,
        address: '',
    });

    function handleChangedHouseData(e) {
        const value = e.target.value;
        setHouseData(value);
    };

    function handleSubmit(e) {
        e.prevent.default();

        const formValues = {
            ds: houseData.ds,
            bds: houseData.bds,
            ba: houseData.ba,
            sqft: houseData.sqft,
            yearBuilt: houseData.yearBuilt,
            status: houseData.status,
            price: houseData.price,
            address: houseData.address,
        };

        if (onSubmit) {
            onSubmit(formValues);
        }
        // setHouseData({});
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="date"
                name="date"
                value={houseData.ds}
                onChange={handleChangedHouseData}
            />
            <input
                type="number"
                name="beds"
                value={houseData.bds}
                onChange={handleChangedHouseData}
            />
            <input
                type="number"
                name="baths"
                value={houseData.ba}
                onChange={handleChangedHouseData}
            />
            <input
                type="number"
                name="sqft"
                value={houseData.sqft}
                onChange={handleChangedHouseData}
            />
            <input
                type="number"
                value={houseData.yearBuilt}
                onChange={handleChangedHouseData}
            />
            <input
                type="text"
                value={houseData.status}
                onChange={handleChangedHouseData}
            />
            <input
                type="number"
                value={houseData.price}
                onChange={handleChangedHouseData}
            />
            <input
                type="text"
                value={houseData.address}
                onChange={handleChangedHouseData}
            />
            <button>Add</button>
        </form>
    );
}

export default HouseForm;
