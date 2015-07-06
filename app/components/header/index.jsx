import "header/header.css"
import React from "react"
import { connect } from 'redux/react';
import * as Example from "actions/example"
import AutoExample from "actions/auto-example"

@connect(state => {
	return state
})
export default class Header {
	componentWillMount() {
		this.props.dispatch(Example.test("hello"))
		this.props.dispatch(Example.testAsync("goodbye"))
		//this.props.dispatch(AutoExample.testAsync("hello"))
		//this.props.dispatch(AutoExample.test("hello"))
	}
	render() {
		return (
			<header>
				{this.props.example.foo}
			</header>
		);
	}
}
