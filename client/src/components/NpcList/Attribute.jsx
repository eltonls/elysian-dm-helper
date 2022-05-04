import "./Attribute.css";

const Attribute = (props) => {
    return (
        <div className="attribute">
            <div className="attribute__header">
                <p className="attribute__mod">{props.mod}</p>
            </div>
            <h6 className="attribute__name">{props.name}</h6>
            <p className="attribute__base">{props.base}</p>
        </div>
    )
}

export default Attribute;
