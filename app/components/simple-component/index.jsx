import React from 'react'

export default class SimpleComponent extends React.Component {
	// Optional constructor, use when you neeed to initialize state
	constructor() {
		super()
		this.state = {
			clicks : 0
		}
	}
	render() {
		// Read the color value passed in by parent component and create an inline style for the button
		const style = {
			color : this.props.color
		}
		return (
			<button style={style} onClick={this.clicked} >Clicked {this.state.clicks} times</button>
		)
	}
	// We use the arrow function syntax to define a function so that 'this' gets bound automatically. 
	// Reference Lexical This https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
	clicked = () => {
		// Setting state will merge the object you pass in with the previous state. Never mutate state directly!
		this.setState({
			clicks : this.state.clicks + 1
		})
	}
}