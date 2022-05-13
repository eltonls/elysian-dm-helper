import React from "react";
import {useState} from "react";
import AttributeAdd from "./AttributeAdd";

const AttributeList = () => {
    const [numberOfAttr, setNumberOfAttr] = useState([1]);    

    const addAtr = (evt) => {
        evt.preventDefault();
        setNumberOfAttr((oldNumber) => [...oldNumber, 1]); 
    }

    return (
        <React.Fragment>
            {
                numberOfAttr.map(() => {return <AttributeAdd />})
            }             
            <button className="btn btn--red" onClick={addAtr}>Add Attribute</button>
        </React.Fragment> 
    )
}

export default AttributeList;
