import React, {useState} from 'react';
import MyButton from "../button/MyButton";
import classes from '../button/MyButton.module.css'


const TodoTask = ({task, index, remove, handleToggle, setTask, tasks}) => {
    const [textareaFlag, setTextareaFlag] = useState(true);
    const [textareaValue, setTextareaValue] = useState('');


    const showTextarea = () => {
        setTextareaFlag(false);
        setTextareaValue(task.text);
    }

    const addNewTextInTextArea = (e) => {
        if(e.code === 'Enter') {
            setTask([
                ...tasks.map(t =>
                    task.id === t.id ? {...t, text: textareaValue} : t
                )
            ])
            setTextareaFlag(true)
        }
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10}}>
            <div className={task.complete ? 'task made' : 'task'}>{index}. {textareaFlag ? task.text :
                <textarea
                    className="my_textarea"
                    onKeyDown={addNewTextInTextArea}
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}/>}
            </div>
            <div className="relative">
                <div
                    onClick={() => handleToggle(task.id)}
                    className="completed"/>
                <MyButton
                    className={classes.my_button}
                    onClick={() => remove(task)}>Удалить</MyButton>
                <MyButton onClick={showTextarea}>Редактировать</MyButton>
            </div>
        </div>
    );
};

export default TodoTask;