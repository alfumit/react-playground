// Code goes here
class Comment extends React.Component {
  render() {
	return (
	  <div className = 'inline'>
		<h3>{this.props.name}</h3>
		<hr>
		<p>{this.props.comment}</p>
	  </div>);
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
			<br>
				<Comment />
				{this._getComments(frameWorks)}
		</section>
	);
	}
	
	_getComments(frameWorks) {
		return frameWorks.map((fw) => (
		<div className='inline'>OJ</div>
		))
	}
	}
	
	
	
	
	
	let target =  document.getElementById("rapp");
	ReactDOM.render(<CommentBox />, target);
