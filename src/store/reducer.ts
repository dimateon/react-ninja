import { IState } from './interfaces/state';
import { ACTION_TYPES } from './constants/actionTypes';
import { ITodo } from '../interfaces/todo';

const initialState: IState = {
    todos: [],
};

type Action = {
    type: string;
    payload: ITodo;
};

export const reducer = (state: IState = initialState, action: Action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TODO:
            console.log(action)
            return {
                todos: [...state.todos, action.payload],
            }
        case ACTION_TYPES.UPDATE_TODO:
            console.log(action.payload)
            return {
                todos: [
                    ...state.todos.map((todo) => {
                        if (todo.id === action.payload.id) {
                            return {
                                ...todo,
                                description: action.payload.description,
                                date: action.payload.creatingDate,
                                isDone: action.payload.isDone,
                            };
                        }
                        return todo;
                    }),
                ],
            }
        case ACTION_TYPES.DELETE_TODO:
            return {
                todos: [...state.todos.filter((todo) => todo.id !== action.payload.id)],
            }
        default:
            return state;
    }
}