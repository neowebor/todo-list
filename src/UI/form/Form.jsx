import React from 'react';
import MyButton from "../button/MyButton";

const Form = ({valueInput, setValue, addTask}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(valueInput);
        setValue('')
    }

    const onKeyPressed = (e) => {
        if(e.code === 'Enter') {
            handleSubmit(e)
        }
    }

    return (
        <div className="box">
            <input
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={onKeyPressed}
                value={valueInput}
                className="my_input"
                type="text"
                placeholder="Введите название задачи"/>
            <MyButton onClick={handleSubmit}>OK</MyButton>
        </div>
    );
};

export default Form;