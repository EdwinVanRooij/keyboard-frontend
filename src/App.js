import React, {Component} from 'react';
// import './foundation.min.css';
import './app.css';

const style = {
    textAlign: 'center',
};

class App extends Component {
    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(text) {
        console.log("Mouse hover over '" + text + "'")
    }

    render() {
        return (
            <div>
                <div className="keyboard">
                    <div className="KeyboardRow">
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "`")}>`</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "1")}>1</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "2")}>2</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "3")}>3</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "4")}>4</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "5")}>5</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "6")}>6</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "7")}>7</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "8")}>8</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "9")}>9</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "0")}>0</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "[")}>[</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "]")}>]</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "Backspace")}>Backspace</span>
                    </div>
                    <div className="KeyboardRow">
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "Tab")}>Tab</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "'")}>'</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, ",")}>,</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, ".")}>.</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "P")}>P</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "Y")}>Y</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "F")}>F</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "G")}>G</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "C")}>C</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "R")}>R</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "L")}>L</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "/")}>/</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "=")}>=</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "\\")}>\</span>
                    </div>
                    <div className="KeyboardRow">
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "A")}>A</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "O")}>O</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "E")}>E</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "U")}>U</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "I")}>I</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "D")}>D</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "H")}>H</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "T")}>T</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "N")}>N</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "S")}>S</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "-")}>-</span>
                    </div>
                    <div className="KeyboardRow">
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, ";")}>;</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "Q")}>Q</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "J")}>J</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "K")}>K</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "X")}>X</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "B")}>B</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "M")}>M</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "W")}>W</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "V")}>V</span>
                        <span className="KeyboardKey" onMouseOver={this.handleHover.bind(this, "Z")}>Z</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
