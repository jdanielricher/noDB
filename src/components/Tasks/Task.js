import React, { Component } from "react";

class Task extends Component {
    constructor() {
        super();
        this.state = {
            editingMode: false,
            userInput: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        })
    }
    handleEdit() {
        this.props.editTask(this.props.task, this.state.userInput)
        this.setState({
            editingMode: false
        })



    }
    componentDidMount() {
        this.setState({
            userInput: this.props.task.name
        })

    }
    render() {
        if (this.state.editingMode == true) {

            return (<div>
                <input value={this.state.userInput} onChange={this.handleChange} />
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={() => this.props.deleteTask(this.props.task)}>Delete</button>
            </div >)
        }
        console.log(this.props.task)
        return (
            <div>
                <h1>{this.props.task.name}</h1>
                <button onClick={() => this.setState({ editingMode: true })}>Edit</button>
                <button onClick={() => this.props.deleteTask(this.props.task)}>Delete</button>
            </div>
        );
    }

}

export default Task;
