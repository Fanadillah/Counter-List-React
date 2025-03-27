import PropTypes from "prop-types"
const Container = (props) => {
    return (
        <section className="container">
            {props.children}
        </section>
        )
}

Container.PropTypes = {
    children: PropTypes.node
}
export default Container