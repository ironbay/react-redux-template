import "root/reset.css"
import "root/root.css"
import React from "react"
import Header from "header"


// This is the root of your application.
// React router will dynamically pass in this.props.children based on the route
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