import { useState } from "react";
import classnames from 'classnames'
import Navbar from './components/Navbar'
import Container from "./components/Container";
import SearchInput from "./components/SearchInput";

import plusIcon from './assets/plus-icon.svg'
import minusIcon from './assets/minus-icon.svg'

import './App.css'

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    {title: 'Susu ultra', count: 1},
    {title: 'Tahu Sumedang', count: 1},
    {title: 'Semangka', count: 1}
  ])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!value) {
      alert('No blank list!')
      return
    }

    const addedTodos = [...todos,  {
      title: value,
      count: 1
    }]

    setTodos(addedTodos)
    setValue('')
  }

  const handleAdditionCount = (index) => {
    const newTodos = [...todos]

    newTodos[index].count = newTodos[index].count + 1

    setTodos(newTodos)
  }

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos]
    
    if (newTodos[index].count > 0){
      // selama jumlah count masih diatas 0
      // bisa lakukan pengurangan
      newTodos[index].count = newTodos[index].count - 1
    } else {
      // kalo udh 0 dan masib di kurang maka akan di apus
      //  splice : index keberapa dan berapa data yang mau di apus
      newTodos.splice(index, 1)
    }

    setTodos(newTodos)
  }

  const getTotalCount = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count
    }, 0)
    return totalCounts
  }

  return (
    <> 
    <Navbar />

    <Container>
    <SearchInput 
      onSubmit={handleSubmit}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />

      <div className="info">
        <div className="info-total">
            <p>{`Total List: ${todos.length}`}</p>
        </div>

        <div className="info-total">
            <p>{`Total Counts: ${getTotalCount()}`}</p>
        </div>

        <button onClick={() => setTodos([])} className="delete-all-button">
          Delete All List
        </button>
      </div>

      {todos.length > 0 ? (
        <div className="todos">
          {todos.map((todo, index, arr) => {
            return (
              <div key={index} className={`todo ${!(arr.length === index +1) && 'todo-divider'}`}>
                
                {todo.title}

                <div className="todo-icon-wrapper">
                  <div className="todo-count">{todo.count}</div>

                  <button className="todo-action-button">
                    <img onClick={() => handleSubstractionCount(index)} src={minusIcon} alt="minus icon"/>
                    </button>

                    <button onClick={() => handleAdditionCount(index)} className="todo-action-button">
                    <img src={plusIcon} alt="plus icon"/>
                    </button>
                </div>
              </div>
            )
          })}
        </div>
      ): (
        <div>Kosong</div>
      )}
    </Container> 

    </>
  );
}

export default App;
