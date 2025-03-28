import PropTypes from "prop-types";
import styles from "./Todos.module.css";

import plusIcon from '../../assets/plus-icon.svg'
import minusIcon from '../../assets/minus-icon.svg'

const Todos = (props) => {
    return (
        <div className="todos">
        {props.todos.map((todo, index, arr) => {
          return (
            <div key={index} className={`todo ${!(arr.length === index +1) && 'todo-divider'}`}>
              
              {todo.title}

              <div className="todo-icon-wrapper">
                <div className="todo-count">{todo.count}</div>

                <button className="todo-action-button">
                  <img onClick={() => props.onSubstraction(index)} src={minusIcon} alt="minus icon"/>
                  </button>

                  <button onClick={() => props.onAddition(index)} className="todo-action-button">
                  <img src={plusIcon} alt="plus icon"/>
                  </button>
              </div>
            </div>
          )
        })}
      </div>
    )
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        count: PropTypes.number,
    })),
    onSubstraction: PropTypes.func,
    onAddition: PropTypes.func,
}

export default Todos