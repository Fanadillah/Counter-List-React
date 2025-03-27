import PropTypes from "prop-types";
import styles from "./Todos.module.css";

const Todos = (props) => {
    return (
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
    )
}