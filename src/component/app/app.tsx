import React, { useState } from "react";
import Input from "../input/input";
import List from "../list/list";

function App() {
    const tasks: string[] = [];

    const [t, setT] = useState(tasks);

    const handleClick = (e: string): void => {
        tasks.push(e);
        setT(tasks);
    };

    return (
        <div>
            <div>Todo List</div>
            <div>
                <Input data={e => handleClick(e)} />
                <List tasks={["a", "b"]} />
                {/* <List tasks={t} /> */}
            </div>
        </div>
    );
}

export default App;
