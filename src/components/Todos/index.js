import PropTypes from "prop-types";
import styles from "./Todos.module.css";
import clasname from 'classnames'
import plusIcon from '../../assets/plus-icon.svg'
import minusIcon from '../../assets/minus-icon.svg'

const Todos = (props) => {
    return (
        <div className={styles.todos}>
        {props.todos.map((todo, index, arr) => {
          return (
            <div key={index} 
            // className={`todo ${!(arr.length === index +1) && styles.todoDivider}`}
            className={clasname(styles.todo, {
                [styles.todoDivider]: !(arr.length === index +1)
            })}
            >
              
              {todo.title}

              <div className={styles.todoIconWrapper}>
                <div className={styles.todoCount}>{todo.count}</div>

                <button className={styles.todoActionButton}>
                  <img onClick={() => props.onSubstraction(index)} src={minusIcon} alt="minus icon"/>
                  </button>

                  <button onClick={() => props.onAddition(index)} className={styles.todoActionButton}>
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