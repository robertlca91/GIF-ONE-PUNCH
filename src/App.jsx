import { useState } from 'react'

import './App.css'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

function App() {
  const [categories, setCategories] = useState(['One Punch'])
  const onAddCategories = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <div className='App'>
      <AddCategory onNewCategory={onAddCategories} />
      <button onClick={onAddCategories}>add</button>
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  )
}

export default App
