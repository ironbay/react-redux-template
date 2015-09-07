import 'home-page/home-page.css'
import React from 'react'
import SimpleComponent from 'simple-component'

export default class HomePage extends React.Component {
	render() {
		return (
			<section className='home-page'>
				<SimpleComponent color='red' />
			</section>
		)
	}
}