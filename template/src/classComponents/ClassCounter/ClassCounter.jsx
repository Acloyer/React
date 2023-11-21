import { Component } from "react";

class ClassCounter extends Component {
    state = {
        count: 0
    }

    render() {
        const text = 'Value is: ';

        return (
            <>
                <div>
                    <button onClick={() => {
                        this.setState({
                            count: this.state.count - 1
                        });
                    }}>-</button>

                    {text} {this.state.count}

                    <button onClick={() => {
                        this.setState({
                            count: this.state.count + 1
                        });
                    }}>+</button>
                </div>
            </>
        )
    }
}

export default ClassCounter;