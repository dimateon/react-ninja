import React, { FormEvent } from "react";
import { useState } from "react";

const initialTodos: string[] = ["Todo 1", "Todo 2", "Todo 3"];

export default function TodoComponent() {
    const [todos, addTodo] = useState<string[]>(initialTodos);

    const handleAddTodo = (value: string) => {
        addTodo(
            [...todos, value]
        )
    }

    return (
        <div className="todo">
            <TodoList todos={todos}></TodoList>
            <TodoForm addTodo={handleAddTodo}></TodoForm>
        </div> 
    )

    
}

const TodoList = (props: any) => {
    const listItems = props.todos.map((item: string, index: number) => <li key={index}>{item}</li>)
    return(
        <ul className="todo-list">
            {listItems}
        </ul>
    )
}

const TodoForm = (props: any) => {
    const [value, setValue] = useState("");

    const handleSubmit = (event: FormEvent) => {
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