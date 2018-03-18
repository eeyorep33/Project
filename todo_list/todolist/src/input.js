import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} >
                <div className="input-group">
                    <span className="input-group-btn">
                        <button className="btn btn-primary" onClick={this.props.assignId} type="submit">Add</button>
                    </span>
                    <input name="todo" className="form-control" placeholder="add a todo" />
                </div>
            </form>
        );
    }
}
export default Input;