import "./NpcList.css";
import NpcSheet from "./NpcSheet";
import NpcAdd from "./NpcAdd";

const NpcList = () => {
    return (
        <div className="npc-list">
            <h4 className="npc-list__heading">NPCs List</h4>
            <NpcSheet />
            <NpcAdd /> 
        </div>
    )
}

export default NpcList;
