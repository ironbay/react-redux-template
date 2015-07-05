import "root/reset.css"
import "root/root.css"
import React from "react"
import Header from "header"


export default class Root {
	render() {
		return (
			<section className="root">
				<Header />
				<section className="main">
				{this.props.children}
				</section>
			</section>
		)
	}
}