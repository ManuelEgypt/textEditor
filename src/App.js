import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

let cl = {
  bold:  'btn-primary' ,
  italic: null ,
  underline: null
};


class App extends Component {
  
state = {
  bold: null,
  italic: null,
  underline: null,
  color: null,
}



selectStyle = style => {

  if (style==="bold") {
    if (!this.state.bold){
      this.setState({
        bold: styles.bold,

      }) 
   } 
   else {
    this.setState({
      bold: null,

    }) 
   }
 }


 if (style==="italic") {
  if (!this.state.italic){
    this.setState({
      italic: styles.italic,

    }) 
 } 
 else {
  this.setState({
    italic: null,

  }) 
 }
}


if (style==="underline") {
  if (!this.state.underline){
    this.setState({
      underline: styles.underline,

    }) 
 } 
 else {
  this.setState({
    underline: null,

  }) 
 }
}

}


selectColor = color => {
  const c = {
  color
  }

  this.setState({
    color: c 
  })

}

  render() 
  {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];
    let stylingBoxes = styleNames.map(style => {
      return (
        <button className={this.state[style] ? "btn-primary":"btn-warning"} style={styles[style]} key={style} onClick = {() => this.selectStyle(style)}>
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick = {() => this.selectColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea style={{...this.state.bold,...this.state.italic,...this.state.underline,...this.state.color}} />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }

}
  

export default App;
