import React, { useState } from "react";
import { CheolEvent } from "../../types/types";

interface Props {
    onClick: (value: string) => void;
}

function Input({ onClick }: Props) {
    const [ivalue, setIValue] = useState("");

    const onEvent = (e: CheolEvent.onChange) => {
        setIValue(e.target.value);
    };

    const handleClick = (event: CheolEvent.onClick) => {
        event.preventDefault();
        onClick(ivalue);
        const iText = (document.getElementById("todo-list") as HTMLElement).getElementsByTagName(
            "input",
        )[0];
        iText.value = "";
    };

    return (
        <div>
            <form id="todo-list">
                <input type="text" placeholder="뭐 할거냐" onChange={onEvent} />
                <button onClick={handleClick}>input</button>
            </form>
        </div>
    );
}
export default Input;
