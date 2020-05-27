import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import '../Color.css';
import './Task.css';

export default function Tasks({ tasks, handleEdit, handleDelete  }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <span>
            <FaEdit
              onClick={ (e) => handleEdit(e, index)}
              className="edit"
            />

            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
}