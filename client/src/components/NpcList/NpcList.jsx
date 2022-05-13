import {useState} from "react";
import "./NpcList.css";
import NpcSheet from "./NpcSheet";
import NpcAdd from "./NpcAdd";

const NpcList = () => {
    const [npcs, setNpcs] = useState([
        {
            name: "Ehrendil Elahana",
            title: "Archmage",
            attributes: ["For", "Dex", "Con", "Int", "Wis", "Cha"],
            attributesValues: [14, 12, 14, 20, 10, 8],
            attributesMods: [2, 1, 2, 5, 0, -1],
        }
    ])    

    const addNpc = (npcObj) => {
       setNpcs((previousNpcs) => [...previousNpcs, npcObj]); 
    }

    return (
        <div className="npc-list">
            <h4 className="npc-list__heading">NPCs List</h4>
            <NpcSheet />
            <NpcAdd /> 
        </div>
    )
}

export default NpcList;
