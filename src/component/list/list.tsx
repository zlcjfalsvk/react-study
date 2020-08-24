import React from "react";

function List(props: { list: string }) {
    const datas: { tasks: string[] } = {
        tasks: ["a", "b", "c"],
    };

    const todos = datas.tasks.map((task, index) => {
        return <li key={index}>{task}</li>;
    });

    return (
        <div>
            <ul>{todos}</ul>
        </div>
    );
}

export default List;
