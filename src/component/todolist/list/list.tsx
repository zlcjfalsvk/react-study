import React, { Component } from "react";

interface Props {
    tasks: string[];
}

interface State {}

export default class List extends Component<Props, State> {
    // eslint-disable-next-line
    constructor(props: Props) {
        super(props);
    }
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
