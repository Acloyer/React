import { Component } from "react";

class ClassDiv extends Component {
    render() {
        const {
            children
        } = this.props;

        return (
            <div className="c-border">
                {children}
            </div>
        )
    }
}

export default ClassDiv;