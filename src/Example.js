import React, {Component} from 'react';


class Example extends Component {


    constructor(props) {
        super(props);
        this.state = {
            name: 'Example',
            text: this.props.paragraphText
        }
    }


    render() {
        return (
            <div>
                To jest przykład komponentu o nazwie {this.state.name}
                <p>{this.state.text}</p>
            </div>
        )
    }

}

export default Example;