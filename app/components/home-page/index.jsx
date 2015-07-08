import 'home-page/home-page.css'
import React from 'react'
import Mui, { LeftNav, RaisedButton } from 'material-ui'
import SimpleComponent from 'simple-component'
const ThemeManager = new Mui.Styles.ThemeManager()

const menuItems = [
  { route: 'get-started', text: 'Get Started' },
  { route: 'customization', text: 'Customization' },
  { route: 'components', text: 'Components' },
];


export default class HomePage extends React.Component {
	static childContextTypes = {
		muiTheme : React.PropTypes.object,
	}
	constructor() {
		super()
		this.state = {
			open : true 
		}
	}
	getChildContext() {
		return {
			muiTheme : ThemeManager.getCurrentTheme()
		}
	}
	render() {
		var style = {
			transform: (this.state.open ? 'translate3d(300px, 0, 0)' : 'initial'),
			transition : 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;'
		}
		return (
			<section className='home-page'>
				<LeftNav ref='leftNav' docked={true} selectedIndex={0} onChange={this.menuClick} menuItems={menuItems}/>
				<div className='wrap' style={style}>
					<RaisedButton onClick={this.toggleMenu} label="Toggle" />
				</div>
			</section>
		)
	}
	toggleMenu = () => {
		this.refs.leftNav.toggle()
		this.setState({
			open : !this.state.open 
		});
	}
}