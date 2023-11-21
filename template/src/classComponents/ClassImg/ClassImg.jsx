import { Component } from "react";

class ClassImg extends Component {
    render() {
        const {
            imgSrc: src,
            imgAlt: alt
        } = this.props;

        return (
            <img
                src={src}
                alt={alt}
            />
        )
    }
}

export default ClassImg;