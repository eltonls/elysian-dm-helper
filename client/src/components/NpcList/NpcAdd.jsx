import "./NpcAdd.css";

const NpcAdd = () => {
    return (
        <form className="npc-add" action="">
            <formgroup className="npc-add__form-group">
                <label className="npc-add__label" htmlFor="name">Name</label>
                <input className="npc-add__name" type="text" />
                <label className="npc-add__label" htmlFor="title">Title</label>
                <input className="npc-add__title" type="" />
            </formgroup>

            <formgroup className="npc-add__form-group">
                <label className="npc-add__label" htmlFor="">Attribute Name</label>

            </formgroup>
        </form>
    )
}

export default NpcAdd;
