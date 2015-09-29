import 'header/header.css'
import React from 'react'
import { connect } from 'react-redux'
import * as Example from 'actions/example'
import AutoExample from 'actions/auto-example'

// This decorator allows you to filter which stores you would like to sync
// This example subscribes to all of them
@connect(state => {
	return state
})
export default class Header extends React.Component {
	componentWillMount() {
		const { dispatch } = this.props
		dispatch(Example.test('wait 2 seconds...'))
		dispatch(Example.testAsync('goodbye'))
		dispatch(AutoExample.test('wait for me too'))
		dispatch(AutoExample.testAsync('bar'))
	}
	render() {
		const { example, autoExample} = this.props
		return (
			<header>
				<div>Normal: {example.message}</div>
				<div>Auto: {autoExample.message}</div>
			</header>
		)
	}
}
