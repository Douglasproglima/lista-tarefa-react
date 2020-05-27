import React, { Component } from 'react';
import Form from  './Form';
import Tasks from './Task';
import './Main.css';

export default class Main  extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };

  //Salva as tarefas no localStorage
  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('MyTasks'));
    if(!tasks) return;
    this.setState({ tasks });
  }

  componentDidUpdate(prevPropos, prevState) {
    const { tasks } = this.state;
    if(tasks === prevState.tasks) return;
     localStorage.setItem('MyTasks', JSON.stringify(tasks));
  }

  handleSumit = (event) => {
    event.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if(tasks.indexOf(newTask) !== -1) return; //Diferente de -1 não existe

    const newsTasks = [...tasks]; //Copy do state

    if(index === -1) {
      this.setState({
        tasks: [...newsTasks, newTask],
        newTask: '',
      });
    } else {
      newsTasks[index] = newTask;
      this.setState({
        tasks: [...newsTasks],
        index: -1,
      });
    }
  }

  handleInputChange = (event) =>  {
    this.setState({
      newTask: event.target.value.toUpperCase(),
    });
  }

  handleDelete = (event, index) => {
    const { tasks } = this.state;
    const newsTasks = [...tasks];
    newsTasks.splice(index, 1);

    this.setState({
      tasks: [...newsTasks],
    });
  }

  handleEdit = (event, index) => {
    const { tasks } = this.state;
    this.setState({
      index,
      newTask: tasks[index],
    });
  }

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h2>Lista de Tarefas</h2>
        <hr></hr>

        <Form
          handleSumit={this.handleSumit}
          handleInputChange={this.handleInputChange}
          newTask={newTask}
          tasks={tasks}
        />

        <Tasks
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tasks={tasks}
        />
      </div>
    );
  }
}
