import React from "react";
import { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm/TodoForm";
import "./Todo.css";

const initialTodos: string[] = ["Todo 1", "Todo 2", "Todo 3"];

export function Todo() {
    const [todos, addTodo] = useState<string[]>(initialTodos);

    const handleAddTodo = (value: string) => {
        addTodo(
            [...todos, value]
        )
    }

    return (
        <div className="todo">
            <TodoList></TodoList>
            <TodoForm addTodo={handleAddTodo}></TodoForm>
        </div> 
    )
}