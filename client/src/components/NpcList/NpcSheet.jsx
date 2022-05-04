import {useState} from "react";
import {ArrowDown} from "phosphor-react";
import "./NpcSheet.css";
import Attributes from "./Attributes";

const NpcSheet = () => {
    const [isSheetOn, setIsSheetOn] = useState(false);

    const changeSheetState = () => {
        if(isSheetOn === true) {
            setIsSheetOn(false);
        } else {
            setIsSheetOn(true);
        }
    }

    return (
        <div className="sheet">
            <div className="sheet__header">
                <h5 className="sheet__name">
                    Ehrendil Elahana
                </h5>
                <button className="btn btn--show" onClick={changeSheetState}>
                    <ArrowDown color="#000" size={28} />
                </button>
            </div>
            {isSheetOn ? <Attributes /> : "" } 
        </div>
    )
}

export default NpcSheet;
