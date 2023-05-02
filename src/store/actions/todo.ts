import { ACTION_TYPES } from '../constants/actionTypes';
import { ITodo } from '../../interfaces/todo';

export const addTodo = (todo: ITodo) => ({
    type: ACTION_TYPES.ADD_TODO,
    payload: todo,
});

export const deleteTodo = (id: number) => ({
    type: ACTION_TYPES.DELETE_TODO,
    payload: { id },
});

export const updateTodo = (id: number, description: string, isDone: boolean) => ({
    type: ACTION_TYPES.UPDATE_TODO,
    payload: { id, description, isDone },
});
