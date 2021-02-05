export default props =>
    <a href={`#/${props.route}`}>
        <i className={`fa fa-${props.icon}`}></i> {props.value}
    </a>