import AttributeList from "./AttributeList";
import "./NpcAdd.css";

const NpcAdd = () => {
    return (
        <form className="npc-add" action="">
            <h2 className="heading-secondary">Add Npc</h2> 
            <formgroup className="npc-add__form-group">
                <label className="npc-add__label" htmlFor="name">Name</label>
                <input className="npc-add__input" type="text" />
                <label className="npc-add__label" htmlFor="title">Title</label>
                <input className="npc-add__input" type="text" />
            </formgroup>

            <formgroup className="npc-add__form-group">
                <AttributeList /> 
            </formgroup>
        </form>
    )
}

export default NpcAdd;
