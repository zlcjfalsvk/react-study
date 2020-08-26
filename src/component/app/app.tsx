import React, { FunctionComponent, useState, useEffect, useCallback, useMemo, memo } from "react";
import Input from "../input/input";
import List from "../list/list";

interface Props {}

const App: FunctionComponent<Props> = ({}) => {
    const tasks: string[] = [];

    const [t, setT] = useState<string[]>([]);

    useEffect(() => {}, [t]);

    const handleClick = useCallback(
        (e: string): void => {
            tasks.push(e);
            console.log(tasks);
            console.log(tasks);
            setT(tasks);
            // console.log(`부모 ${tasks}`);
        },
        [tasks],
    );

    return (
        <div>
            <div>Todo List</div>
            <div>
                <Input onClick={handleClick} />
                {/* <List tasks={["a", "b"]} /> */}
                <List tasks={t} />
            </div>
        </div>
    );
};

// function App() {
//     const tasks: string[] = [];

//     const [t, setT] = useState(tasks);

//     useEffect(() => {}, [t]);

//     const handleClick = (e: string): void => {
//         tasks.push(e);
//         setT(tasks);
//     };

//     return (
//         <div>
//             <div>Todo List</div>
//             <div>
//                 <Input data={e => handleClick(e)} />
//                 {/* <List tasks={["a", "b"]} /> */}
//                 <List tasks={t} />
//             </div>
//         </div>
//     );
// }

export default App;
