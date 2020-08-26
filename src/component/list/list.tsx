import React, { Component } from "react";

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

interface Props {
    tasks: string[];
}

interface State {}

export default class List extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            values: props.tasks,
        };
    }
    // todos() {
    //     console.log(this.props);
    //     return this.props.tasks.map((task, index) => {
    //         return <li key={index}>{task}</li>;
    //     });
    // }

    render() {
        const { tasks } = this.props;
        return (
            <div>
                <ul>
                    {tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
