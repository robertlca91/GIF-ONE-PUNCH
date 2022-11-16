import React, { useState } from 'react'

const AddCategory = ({ onNewCategory }) => {
  const [input, setinput] = useState('')
  const onInputChange = ({ target }) => {
    setinput(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (input.trim().length <= 1) return
    // onNewCategory((categories) => [input, ...categories])
    onNewCategory(input.trim())
    setinput('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='buscar gifs'
        value={input}
        onChange={onInputChange}
      />
    </form>
  )
}

export default AddCategory
