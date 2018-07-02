import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import Nav from './navbar/Nav';
import Footer from './footer/Footer';
import './navbar/Nav.css'
import './footer/Footer.css'
import Task from './Tasks/Task'
import AddTask from './Tasks/AddTask'

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  componentDidMount() {
    axios
      .get("/checklists").then(results => {
        console.log(results);
        this.setState({ tasks: results.data })

      })

  }
  deleteTask(task) {
    axios
      .delete(`/checkLists/${task.id}`).then(results => {
        console.log(results);
        this.setState({ tasks: results.data })
      })
  }
  editTask(task, userInput) {
    axios
      .put(`/checkLists/${task.id}`, { name: userInput }).then(results => {
        console.log(results);
        this.setState({ tasks: results.data })
      })
  }
  addTask(userInput) {
    axios
      .post(`/checkLists`, { name: userInput }).then(results => {
        console.log(results);
        this.setState({ tasks: results.data })
      }
      )
  }
  render() {
    let name = this.state.tasks.map((task, i) => {
      return <Task deleteTask={this.deleteTask} task={task} editTask={this.editTask} />


    })
    return (
      <div className="App">
        <Nav />
        <AddTask
          addTask={this.addTask} />
        {name}
        <Footer />
      </div>
    );
  }
}

export default App;
