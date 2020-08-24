import React from "react";
import Input from "../input/input";
import List from "../list/list";

function App() {
    const handleClick = (e: any) => {
        console.log(`부모에서 받음 ${e}`);
    };

    return (
        <div>
            <div>Todo List</div>
            <div>
                <Input />
                <List list="b" />
            </div>
        </div>
    );
}

export default App;
