import React from "react";

const AttributeAdd = () => {
    return (
        <div className="npc-add__attribute">
            <label className="npc-add__label" htmlFor="">Attribute Name:</label>
            <input className="npc-add__input--attr-name" type="text" />
            <label className="npc-add__label" htmlFor="">Value:</label>
            <input className="npc-add__input--attr" type="text" />
            <label className="npc-add__label" htmlFor="">Mod:</label>
            <input className="npc-add__input--attr" type="text" />
        </div>
    )
}

export default AttributeAdd;
