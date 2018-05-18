import React, {Component} from 'react';
// import './foundation.min.css';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(key) {
        console.log("Mouse hover over '" + key + "'")
    }

    handleClick(key) {
        console.log("Clicked '" + key + "'")
    }

    render() {
        return (
            <div>
                <div className="keyboard">
                    <div className="KeyboardRow">
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "`")} onMouseOver={this.handleHover.bind(this, "`")}>`</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "1")}  onMouseOver={this.handleHover.bind(this, "1")}>1</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "2")}  onMouseOver={this.handleHover.bind(this, "2")}>2</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "3")}  onMouseOver={this.handleHover.bind(this, "3")}>3</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "4")}  onMouseOver={this.handleHover.bind(this, "4")}>4</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "5")}  onMouseOver={this.handleHover.bind(this, "5")}>5</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "6")}  onMouseOver={this.handleHover.bind(this, "6")}>6</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "7")}  onMouseOver={this.handleHover.bind(this, "7")}>7</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "8")}  onMouseOver={this.handleHover.bind(this, "8")}>8</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "9")}  onMouseOver={this.handleHover.bind(this, "9")}>9</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "0")}  onMouseOver={this.handleHover.bind(this, "0")}>0</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "[")}  onMouseOver={this.handleHover.bind(this, "[")}>[</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "]")}  onMouseOver={this.handleHover.bind(this, "]")}>]</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "Backspace")}  onMouseOver={this.handleHover.bind(this, "Backspace")}>Backspace</span>
                    </div>
                    <div className="KeyboardRow">
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "Tab")}  onMouseOver={this.handleHover.bind(this, "Tab")}>Tab</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "'")}  onMouseOver={this.handleHover.bind(this, "'")}>'</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, ",")}  onMouseOver={this.handleHover.bind(this, ",")}>,</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, ".")}  onMouseOver={this.handleHover.bind(this, ".")}>.</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "P")}  onMouseOver={this.handleHover.bind(this, "P")}>P</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "Y")}  onMouseOver={this.handleHover.bind(this, "Y")}>Y</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "F")}  onMouseOver={this.handleHover.bind(this, "F")}>F</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "G")}  onMouseOver={this.handleHover.bind(this, "G")}>G</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "C")}  onMouseOver={this.handleHover.bind(this, "C")}>C</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "R")}  onMouseOver={this.handleHover.bind(this, "R")}>R</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "L")}  onMouseOver={this.handleHover.bind(this, "L")}>L</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "/")}  onMouseOver={this.handleHover.bind(this, "/")}>/</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "=")}  onMouseOver={this.handleHover.bind(this, "=")}>=</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "\\")}  onMouseOver={this.handleHover.bind(this, "\\")}>\</span>
                    </div>
                    <div className="KeyboardRow">
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "A")}  onMouseOver={this.handleHover.bind(this, "A")}>A</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "O")}  onMouseOver={this.handleHover.bind(this, "O")}>O</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "E")}  onMouseOver={this.handleHover.bind(this, "E")}>E</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "U")}  onMouseOver={this.handleHover.bind(this, "U")}>U</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "I")}  onMouseOver={this.handleHover.bind(this, "I")}>I</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "D")}  onMouseOver={this.handleHover.bind(this, "D")}>D</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "H")}  onMouseOver={this.handleHover.bind(this, "H")}>H</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "T")}  onMouseOver={this.handleHover.bind(this, "T")}>T</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "N")}  onMouseOver={this.handleHover.bind(this, "N")}>N</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "S")}  onMouseOver={this.handleHover.bind(this, "S")}>S</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "-")}  onMouseOver={this.handleHover.bind(this, "-")}>-</span>
                    </div>
                    <div className="KeyboardRow">
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, ";")}  onMouseOver={this.handleHover.bind(this, ";")}>;</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "Q")}  onMouseOver={this.handleHover.bind(this, "Q")}>Q</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "J")}  onMouseOver={this.handleHover.bind(this, "J")}>J</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "K")}  onMouseOver={this.handleHover.bind(this, "K")}>K</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "X")}  onMouseOver={this.handleHover.bind(this, "X")}>X</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "B")}  onMouseOver={this.handleHover.bind(this, "B")}>B</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "M")}  onMouseOver={this.handleHover.bind(this, "M")}>M</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "W")}  onMouseOver={this.handleHover.bind(this, "W")}>W</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "V")}  onMouseOver={this.handleHover.bind(this, "V")}>V</span>
                        <span className="KeyboardKey" onClick={this.handleClick.bind(this, "Z")}  onMouseOver={this.handleHover.bind(this, "Z")}>Z</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
