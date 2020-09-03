import React from "react";
import Input from "../input/input";
import List from "../list/list";

interface Props {}

interface State {
    tasks: string[];
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            tasks: [],
        };
        this.handleClick = this.handleClick.bind(this);
        this.getTasks = this.getTasks.bind(this);
    }

    handleClick(e: string): void {
        // 이 코드는 컴포넌트를 다시 렌더링하지 않음
        this.state.tasks.push(e);
        // 넣어줘야 함
        this.setState(this.state);
    }

    getTasks(): string[] {
        return this.state.tasks;
    }

    render() {
        return (
            <div>
                <div>Todo List</div>
                <div>
                    <Input onClick={this.handleClick} />
                    <List tasks={this.getTasks()} />
                </div>
            </div>
        );
    }
}
export default App;
