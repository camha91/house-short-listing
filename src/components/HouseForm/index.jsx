import React from 'react';
import PropTypes from 'prop-types';

HouseForm.propTypes = {
    onSubmit: PropTypes.func,
};

HouseForm.defaultProps = {
    onSubmit: null,
}

function HouseForm(props) {
    const { onSubmit } = props;
    const [houseData, setHouseData] = useState('');

    return (
        <form>
            <input
                type="text"
                value={houseData}
                onChange={() => handleChangedHouseData}
            />
        </form>
    );
}

export default HouseForm;
