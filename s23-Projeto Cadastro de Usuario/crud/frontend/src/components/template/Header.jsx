import "./Header.css";

export default (props) => (
  <header className="header d-none d-sm-flex flex-column">
    {/*d-none: for xs devices the display will be none; d-sm-flex: for sm devices to above the display will be flex*/}
    <h1 className="mt-3">
      <i className={`fa fa-${props.icon}`}></i> {props.title}
    </h1>
    <p className="lead text-muted">
        {props.subtitle}
    </p>
  </header>
);
