import React from 'react';
import { FilterLabel, FilterInput } from './filter.styled';
import PropTypes from 'prop-types';

function Filter({ filterString, onChange }) {
    return (
        <FilterLabel htmlFor="filter">
            Find name
            <FilterInput
                type="text"
                name="filter"
                onChange={onChange}
                value={filterString}
            ></FilterInput>
        </FilterLabel>
    );
}

export default Filter;

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
};
