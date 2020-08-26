import React, { useState } from "react";

interface Props {
    onClick: (value: string) => void;
}

function Input({ onClick }: Props) {
    const [ivalue, setIValue] = useState("");

    const onEvent = (e: any) => {
        setIValue(e.target.value);
    };

    const handleClick = () => {
        onClick(ivalue);
    };

    return (
        <div>
            <input type="text" placeholder="뭐 할거냐" onChange={onEvent} />
            <button onClick={handleClick}>input</button>
        </div>
    );
}
export default Input;
