import React from 'react';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Work from './Work.jsx';
import Education from './Education.jsx';
import Interest from './Interest.jsx';
import Contact from './Contact.jsx';
import Error from './Error404.jsx';


import Bootstrap from '../css/bootstrap.css';
import FontAwesome from '../css/font-awesome.css';
import Styles from '../css/style.css';
// require('../../node_modules/bootstrap/dist/css/bootstrap.css');
// require('../css/font-awesome.css');
// require('../css/style.css');

// Header container components
export class HeaderCon extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			details: {
				name: 'Mohammed Ansir',
				email: 'mohammed.ansir @gmail.com',
				phone: '07847 527 698',
				location: 'London, England',
				linkedin: 'https://www.linkedin.com/in/mohammed-ansir-a2b90523/',
				instagram: 'https://www.instagram.com/lenny2472013/'
			}
		}
	}
	render(){
		const {name, email, phone, location, linkedin, instagram} = this.state.details
		return(
			<div>
				<Nav />
				<Header details={this.state.details} />
			</div>
		)
	}
}

// Resume container components
export class ResumeCon extends React.Component{
	render(){
		return(
			<div className="container">
				<About />
				<hr />
				<Skills />
				<hr />
				<Work />
				<hr />
				<Education />
				<hr />
				<Interest />
			</div>
		)
	}
}

//Individual container components
export class AboutPresComp extends React.Component{
	render(){
		return(
			<About />
		)
	}
}

export class SkillsPresComp extends React.Component{
	render(){
		return(
			<Skills />
		)
	}
}

export class WorkPresComp extends React.Component{
	render(){
		return(
			<Work />
		)
	}
}

export class EducationPresComp extends React.Component{
	render(){
		return(
			<Education />
		)
	}
}

export class ContactPresComp extends React.Component{
	render(){
		return(
			<Contact />
		)
	}
}

export class Error404 extends React.Component{
	render(){
		return(
			<Error />
		)
	}
}


