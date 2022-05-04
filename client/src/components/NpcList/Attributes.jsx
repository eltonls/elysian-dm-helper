// There is a difference between
import Attribute from "./Attribute.jsx";
import "./Attributes.css";

const Attributes = (props) => {
    /* return (
        <div className="attributes">
            {props.attributes.map((element) => {
                return (
                    <Attribute name={element.name} mod={element.mod} base={element.base} />)
                )
            }
        </div>
    ) */

    return (
        <div className="attributes">
            <Attribute name="Str" mod="+5" base="20" />
            <Attribute name="Dex" mod="+1" base="12" />
            <Attribute name="Con" mod="+2" base="14" />
            <Attribute name="Int" mod="-1" base="8" />
            <Attribute name="Wis" mod="+0" base="10" />
            <Attribute name="Cha" mod="+1" base="12" />
        </div>
    )
}

export default Attributes;
