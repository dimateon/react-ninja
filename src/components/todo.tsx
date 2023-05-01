import React, { FormEvent } from "react";
import { useState } from "react";

const initialTodos: string[] = ["Todo 1", "Todo 2", "Todo 3"];

export default function TodoComponent() {
    const [todos, addTodo] = useState<string[]>(initialTodos)
    return (
        <div className="todo">
            <TodoList todos={todos}></TodoList>
            <TodoForm addTodo={handleAddTodo}></TodoForm>
        </div> 
    )

    function handleAddTodo(value: string) {
        addTodo(
            [...todos, value]
        )
    }
}

function TodoList(props: any) {
    const listItems = props.todos.map((item: string, index: number) => <li key={index}>{item}</li>)
    return(
        <ul className="todo-list">
            {listItems}
        </ul>
    )
}

function TodoForm(props: any) {
    const [value, setValue] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        props.addTodo(value);
        setValue("");
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        </form>
    )
}