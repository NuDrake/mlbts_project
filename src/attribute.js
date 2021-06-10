import React from 'react';

class Attribute extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const label = this.props.name
        const val = this.props.value

        return (
            <div className="attribute">
                <p className="attributeLabel">{label}:</p>
                <p className="attributeValue">{val}</p>
            </div>
        )
    }
}

export default Attribute