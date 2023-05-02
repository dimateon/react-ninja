import React from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button, Space, Divider } from 'antd';
import { getCurrentDate, getRandomId } from '../../../utils';
import { addTodo } from '../../../store/actions';
import "./TodoForm.css";

const { TextArea } = Input;

interface ITodoFormProps {
    addTodo(value: string): void;
}

export const TodoForm = (props: ITodoFormProps) => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState<string>("");

    const handleCreate = () => {
        if (value.trim().length < 1) { return; }
        dispatch(
            addTodo({
                id: getRandomId(),
                description: value,
                creatingDate: getCurrentDate(),
                isDone: false,
            })
        )
        setValue("");
    }

    const handleClear = () => {
        setValue("");
    }

    return (
        <div className='todo-form'>
            <TextArea value={value} onChange={e => setValue(e.target.value)} autoSize={{minRows: 3}} className='todo-form__textarea' />
            <Space>
                <Button type="primary" onClick={handleCreate}>Create</Button>
                <Button onClick={handleClear}>Clear</Button>
            </Space>
        </div>
    )
}