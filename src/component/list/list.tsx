import React, { PureComponent } from "react";

// function List(props: { tasks: string[] }) {
//     const todos = props.tasks.map((task, index) => {
//         return <li key={index}>{task}</li>;
//     });

//     return (
//         <div>
//             <ul>{todos}</ul>
//         </div>
//     );
// }

// export default List;

interface State {
    tasks: string[];
}

export default class List extends PureComponent<State> {
    todos() {
        console.log(this.props);
        return this.props.tasks.map((task, index) => {
            return <li key={index}>{task}</li>;
        });
    }

    render() {
        return (
            <div>
                <ul>{this.todos()}</ul>
            </div>
        );
    }
}
