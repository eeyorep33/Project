import React, { Component } from 'react';
import Input from './input'
import List from './list'


// Would delete test info but not sure if I am supposed to leave it in for assignment purposes
let listArray = [
    { name: "Learn Angular", done: false, id: 1 },
    { name: "write the contents for the next module", done: false, id: 2 },
    { name: "buy cheese", done: false, id: 3 },
    { name: "buy milk", done: false, id: 4 }]

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: listArray,
            allItems: "all",
            id: 4,
           
        }
    }
    
    assignId = (e) => {
        this.setState({ id: this.state.id + 1 })
    }
    //uses id to find index of the checked box and changes the 'done' value from false to true
    checkedBox = (i) => {
        let index = this.state.items.findIndex((e) => { return e.id === i });
        let newListArray = [...this.state.items]
        newListArray[index].done = !newListArray[index].done
        this.setState({
            items: newListArray
        })
    }
    //submits new todo and clears the form
    handleSubmit = (e) => {
        e.preventDefault()
        let newListArray = [...this.state.items]
        newListArray.push({ name: e.target.todo.value, done: false, id: this.state.id })
        this.setState({
            items: newListArray,
        })
        e.target.todo.value = "";
    }
    //deletes completed todo 
    handleClear = () => {
        let newListArray = [...this.state.items]
        let updatedListArray = newListArray.filter((item, i) => {
            if (item.done === true) {
                return false
            }
            else { return true }
        })
        this.setState({
            items: updatedListArray
        })
    }
    //filter for active items
    activeToDo = (item) => {
        return item.done === false;
    }
    //used in some() method for disable button and to filter for complete items
    disabled = (item) => {
        return item.done === true
    }
    //Toggles between all, active and complete
    changeList = (e) => {
        this.setState({ allItems: e.target.value })
    }

    render() {
        // filters which items are displayed in each list
        let currentList = []
        if (this.state.allItems === "all") {
            currentList = this.state.items
        }
        else if (this.state.allItems === "active") {
            currentList = this.state.items.filter(this.activeToDo)
        }
        else
            if (this.state.allItems === "complete") {
                currentList = this.state.items.filter(this.disabled);
            }

        return (
            <div>
                <div className="container">
                
                    <h1 className="text-center">todos</h1>
                    <Input handleSubmit={this.handleSubmit} assignId={this.assignId} clearForm={this.handleClearForm} />
                    <List checkedBox={this.checkedBox} listArray={currentList} val={this.state.allItems} />
                    <select onChange={this.changeList} value={this.state.allItems}>
                        <option value="all">all</option>
                        <option value="active">active</option>
                        <option value="complete">complete</option>
                    </select>
                    <button onClick={this.handleClear} disabled={this.state.items.some(this.disabled) === false}
                        className="pull-right btn btn-default">Clear Complete</button>
                </div>
            </div>
        );
    }
}

export default App;
