import "header/header.css"
import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import * as Example from "actions/example"

@connect(state => {
	return state
})
export default class Header {
	componentWillMount() {
    	bindActionCreators(Example, this.props.dispatch).test()
	}
	render() {
		return (
			<header>
				{this.props.example.foo}
			</header>
		);
	}
}
