import React, { useState } from "react";

function Input({ data }: any) {
    const [ivalue, setIValue] = useState("");

    const onEvent = (e: any) => {
        setIValue(e.target.value);
    };

    const onClick = (e: any) => {
        data(ivalue);
    };

    return (
        <div>
            <input type="text" placeholder="뭐 할거냐" onChange={onEvent} />
            <button onClick={onClick}>input</button>
        </div>
    );
}
export default Input;
