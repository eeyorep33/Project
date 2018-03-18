import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.listArray.map((item, i) =>
                    <li className="list-group-item" key={i}>
                        <input onChange={() => this.props.checkedBox(item.id)} type="checkbox" checked={item.done === true} value="on" />
                        <label className={item.done ? "done" : ""}>{item.name}</label>
                    </li>)
                }
            </ul>
        );
    }
}
export default List; 