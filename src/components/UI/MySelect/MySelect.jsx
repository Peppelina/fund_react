import React from 'react';

const MySelect = ({sortBy, setSortBy, options}) => {
    return (
        <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            <option disabled={true} value="">Сортировка</option>
            {options.map(option => <option value={option.value}>{option.name}</option>)}
        </select>
    );
};

export default MySelect;