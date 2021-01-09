import React from 'react'
import Input from './Input';


function CreateTask({ onChange }) {
    function onSubmit(e) {
        e.preventDefault();
        onChange(e.target[0].value);
        e.target[0].value = "";
    }


    return (
        <form onSubmit={onSubmit}>
            <Input />
        </form>
    )
}

export default CreateTask
