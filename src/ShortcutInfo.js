import React, {Component} from 'react';
import './foundation.min.css';
import './app.css';
import './sections.css';


const row_item_style = {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    maxWidth: "30rem",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "2rem",
    textAlign: "center",
};

class ShortcutInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {mapping: props.mapping}
    }

    componentWillReceiveProps(nextProps) {
        this.setState({mapping: nextProps.mapping});
    }

    formatModifier(modifier) {
        if (modifier) {
            return (
                <div>
                    Modifier: {modifier}
                </div>
            )
        }
        return ' '
    }

    formatEnhancements(enhancements) {
        if (enhancements) {
            if (enhancements.length >= 1) {
                return (
                    <div>
                        {'Enhancements: ' + enhancements.join(", ")}
                    </div>
                )
            }
        }
        return ' '
    }

    render() {
        return (
            <div style={row_item_style} className="callout">
                {this.formatModifier(this.state.mapping.modifierKey)}
                {this.formatEnhancements(this.state.mapping.enhancements)}
                Primary key: {this.state.mapping.character} <br/>
                Description: {this.state.mapping.action} <br/>
            </div>
        )
    }
}

export default ShortcutInfo;
