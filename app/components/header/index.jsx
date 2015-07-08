import "header/header.css"
import React from "react"
import { connect } from 'redux/react';
import * as Example from "actions/example"
import AutoExample from "actions/auto-example"

// This decorator allows you to filter which stores you would like to sync
// This example subscribes to all of them
@connect(state => {
	return state
})
export default class Header {
	componentWillMount() {
		this.props.dispatch(Example.test("wait 2 seconds..."))
		this.props.dispatch(Example.testAsync("goodbye"))
		this.props.dispatch(AutoExample.test("wait for me too"))
		this.props.dispatch(AutoExample.testAsync("bar"))
	}
	render() {
		return (
			<header>
				<div>Normal: {this.props.example.message}</div>
				<div>Auto: {this.props.autoExample.message}</div>
			</header>
		);
	}
}
