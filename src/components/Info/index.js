import styles from './Info.module.css';
import PropTypes from 'prop-types';
const Info = (props) => {
    return (
        <div className={styles.info}>
        <div className={styles.infoTotal}>
            <p>{`Total List: ${props.todosLength}`}</p>
        </div>

        <div className={styles.infoTotal}>
            <p>{`Total Counts: ${props.totalCount}`}</p>
        </div>

        <button onClick={props.onDelete} className={styles.deleteAllButton}>
          Delete All List
        </button>
      </div>
    )
}

Info.propTypes = {
    todosLength: PropTypes.number,
    totalCount: PropTypes.func,
    onDelete: PropTypes.func,
}
export default Info;