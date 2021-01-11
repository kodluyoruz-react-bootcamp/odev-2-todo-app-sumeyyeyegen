import React from 'react'

function CreateTask({ onChange }) {
    function onSubmit(e) {
        e.preventDefault();
        onChange(e.target[0].value);
        e.target[0].value = "";
    }


    return (
        <form onSubmit={onSubmit}>

        </form>
    )
}

export default CreateTask
