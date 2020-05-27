import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import '../Color.css';
import './Form.css';

export default function Form( {handleSumit, handleInputChange, newTask} ){
  return (
    <form onSubmit={handleSumit} action="#">
          <input
            onChange={handleInputChange}
            type="text"
            value={newTask}
            maxLength="34"
            />
          <button type="submit">
            <FaPlus />
          </button>
          <hr></hr>
        </form>
  );
}

//Valor Padrão das tasks
Form.defaultProps = {
  newTask: '',
}

Form.propTypes = {
  handleSumit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
}
