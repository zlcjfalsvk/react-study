import React from "react";

function List(props: { tasks: string[] }) {
    const todos = props.tasks.map((task, index) => {
        return <li key={index}>{task}</li>;
    });

    return (
        <div>
            <ul>{todos}</ul>
        </div>
    );
}

export default List;
