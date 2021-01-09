import React from 'react'

function FilterButton({ name, onChange, selected }) {
    return (
        <a href="true" className={selected} onClick={() => onChange(name)}>{name}</a>
    )
}

export default FilterButton
