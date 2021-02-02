import React from 'react';
import PropTypes from 'prop-types';

DropDown.propTypes = {
    dates: PropTypes.array,
    onDateClick: PropTypes.func,
};

DropDown.defaultProps = {
    dates: [],
    onDateClick: null,
}

function DropDown(props) {
    const { dates, onDateClick } = props;

    function handleDateClick(date) {
        if (onDateClick) {
            onDateClick(date);
        }
    };

    return (
        <div class="dropdown">
            <button class="dropbtn">Listing Dates</button>
            <div class="dropdown-content">
                {dates.map((date, i) =>
                    <a
                        onClick={() => handleDateClick()}
                    >{date[i].ds}</a>
                )}
            </div>
        </div>
    );
}

export default DropDown;