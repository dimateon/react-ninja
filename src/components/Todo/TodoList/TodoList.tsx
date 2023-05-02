import React from "react";
import { useSelector } from 'react-redux';
import  "./TodoList.css";
import { TodoItem } from "./TodoItem";
import { IState } from "../../../store/interfaces/state";

export const TodoList = () => {
    const todos = useSelector((state: IState) => state.todos);
    return(
        <div className="todo-list">
            {!!todos.length &&
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        description={todo.description}
                        creatingDate={todo.creatingDate}
                        id={todo.id}
                        isDone={todo.isDone}
                    />
                ))}
        </div>
    )
}
