import React, { Component } from "react";


class AddTask extends Component {
    constructor() {
        super();
        this.state = {
            chair: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.addTask(this.state.chair)
        this.setState({
            chair: ""
        })
    }
    render() {
        return (
            <div>
                <input onChange={e => this.setState({ chair: e.target.value })} />
                <button onClick={this.handleClick}>Send</button>
            </div>
        );
    }
}
export default AddTask;
