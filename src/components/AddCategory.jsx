import PropTypes from 'prop-types';

import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({target}) => {
        setInputValue(target.value);
    };

    const onSubmit = (e) => {
        // console.log('onSubmit');
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        
        onNewCategory(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar GIF"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};