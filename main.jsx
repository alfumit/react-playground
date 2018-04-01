import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'react-redux';

// Code goes here

class Comment extends React.Component {
	constructor() {
		super();

		this.state = {
			colorMe: false
		}
	}

	render() {
		let text = 'inline';
		if(this.state.colorMe) {
			text = 'inline stupeed'
		} else {
			text = 'inline';
		}
	return (
	  <div className = {text} onClick={this._changeColor.bind(this)}>
		<h3>{this.props.name}</h3>
		<hr />
		  {text}
		  {this.props.color}
		<p>{this.props.comment}</p>
	  </div>);
	}

	_changeColor() {
		this.setState({colorMe: !this.state.colorMe})
	}
}

class CommentBox extends React.Component {
	render() {
		const time = new Date();
		const frameWorks = [{
			name: 'Angular',
			comment: 'Awesome'
		}
			,{
				name: 'React',
				comment: "shit, why did you appear? Too much sugar"
			},{
				name: 'Vue',
				comment: 'Oh, for Fucks sake! Another one?'
			}];


		return (<section><h1> Fuck Yeah! </h1>
			<div>Hello From react: {time.toTimeString()}</div>
			<p className='stupeed'>Some bla bla </p>
			<br />
			{this._getComments(frameWorks)}
		</section>);
	}

	_getComments(frameWorks) {
		return frameWorks.map((fw) => (
			<Comment name={fw.name} comment={fw.comment} key={fw.id} />
		))
	}

}


ReactDOM.render(<CommentBox />, document.getElementById("rapp"));
