import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { ITodo } from "../../../../interfaces/todo";
import { EditOutlined, DeleteOutlined, FileDoneOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip, Modal, Input, Tag } from 'antd';
import "./TodoItem.css";
import { deleteTodo, updateTodo } from "../../../../store/actions";

export const TodoItem = (props: ITodo) => {
    const { TextArea } = Input;
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState(props.description);
    const [isDone, setIsDone] = useState(props.isDone);
    const [isEdit, setIsEdit] = useState(false);
    const handleDelete = () => {
        setIsModalOpen(true);
    }
    const handleOk = () => {
        dispatch(deleteTodo(props.id));
        setIsModalOpen(false);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    }
    const handleDone = () => {
        setIsDone(!isDone);
        dispatch(updateTodo(props.id, description, isDone))
    }
    const handleChangeDescription = (value: string) => {
        setDescription(value);
    }
    const handleEdit = () => {
        if (isEdit) {
            dispatch(updateTodo(props.id, description, isDone))
        }
        setIsEdit(!isEdit);
    }

    return (
        <div className="todo-item">
            <div className="todo-item__controls">
                {isDone && 
                    <span className="todo-item__status">
                        <Tag color="success">
                            DONE
                        </Tag>
                    </span>
                }
                <Space align="baseline">
                    <Tooltip title={isEdit ? "Save" : "Edit"}>
                        <Button shape="circle" icon={isEdit ? <SaveOutlined /> : <EditOutlined />} onClick={handleEdit} />
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDelete} />
                    </Tooltip>
                    <Tooltip title="Change state">
                        <Button shape="circle" icon={<FileDoneOutlined />} onClick={handleDone} />
                    </Tooltip>
                </Space>
                
            </div>
            <div className="todo-item__body">
                <div className="todo-item__date">Created: {props.creatingDate}</div>
                {isEdit ?
                    <>
                        <TextArea
                            value={description}
                            onChange={e => handleChangeDescription(e.target.value)}
                            autoSize={true}
                            className="todo-item__textarea"
                        />
                    </> :
                    <div>{props.description}</div>}
            </div>
            

            <Modal title="Delete TODO" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Delete" centered>
                <p>Are you sure that you want to delete TODO permanently?</p>
            </Modal>
        </div>
    )
}