import React, { Component } from 'react';

//Form
import { FaPlus } from 'react-icons/fa';

//Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main  extends Component {
  state = {
    newTask: '',
    taks: [
      'Tomar Remédio',
      'Fazer Café',
      'Beber Café',
      'Revisar Anki',
      'DuoLingo',
      'Ir p/ o trampo'
    ]
  };

  handleInputChange = (event) =>  {
    this.setState({
      newTask: event.target.value,
    });
  }
  render() {
    const { newTask, taks } = this.state;
    return (
      <div className="main">
        <h2>Lista de Tarefas</h2>
        <hr></hr>

        <form action="#">
          <input
            onChange={this.handleInputChange}
            type="text"
            value={newTask}
            />
          <button type="submit">
            <FaPlus />
          </button>
          <hr></hr>

          <ul className="tasks">
            {taks.map((task, key) => (
              <li key={key}>
                {task}
                <div>
                  <FaEdit className="edit" />
                  <FaWindowClose className="delete" />
                </div>
              </li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}