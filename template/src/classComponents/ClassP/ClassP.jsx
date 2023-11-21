import { Component } from "react";

class ClassP extends Component {
    render() {
        const {
            children
        } = this.props;

        return (
            <p>
                {children}
            </p>
        )
    }
}

export default ClassP;