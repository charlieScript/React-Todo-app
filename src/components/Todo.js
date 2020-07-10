import React, { Component } from 'react';
import './stylesheets/Todo.css';
import Todos from './Todos';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: '',
            todos: [
                {
                    id: 1,
                    todoItem: 'Walk to school',
                },
                {
                    id: 2,
                    todoItem: 'Run to school',
                },
            ],
        };
    }

    handleInput = (e) => {
        this.setState({
            inputText: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { inputText } = this.state;
        const items = [...this.state.todos];
        if (inputText !== '') {
            items.push({
                id: items.length + 1,
                todoItem: inputText,
            });
            this.setState({
                inputText: '',
                todos: items,
            });
        } else {
            return;
        }
    };

    deleteItem = (key) => {
        const lis = [...this.state.todos];
        let newList = lis.filter(i => i.id !== key)
        // console.log(lis)
        console.log(newList)
        console.log(key)
        this.setState({
            todos: newList,
        });
    }

    render() {
        const { todos } = this.state;
        const todoList = todos.map((todo) => (
            <Todos deleteItem={this.deleteItem} todoList={todo.todoItem} key={todo.id} id={todo.id} />
        ));
        return (
            <div>
                <div className="card">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Add Todo</h3>
                        <input
                            type="text"
                            value={this.state.inputText}
                            onChange={this.handleInput}
                        />
                        <input type="submit" value="Submit" />
                    </form>
                    <div className='listScroll'>
                        {/* {this.state.todos.map(i => (
                            <p key={i.id}> {i.todoItem}</p>
                        ))} */}
                        {/* <Todos todo={this.state.todos} /> */}
                        {todoList}
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo;
