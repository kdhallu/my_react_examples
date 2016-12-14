import React from 'react';
import ReactDOM from 'react-dom';

export default class LifeCycleExample extends React.Component  {

	constructor(props) {
		super(props);
		this.state = {
			data: 0
		};
		this.setNewNumber = this.setNewNumber.bind(this);
	};

	setNewNumber() {
		this.setState({data: this.state.data + 1})
		if(this.state.data == 5) {
			ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
		}

	}

	render() {
		return (
			<div>
				<button onClick={this.setNewNumber}>INCREMENT</button>
				<Content myNumber={this.state.data}></Content>
			</div>
		);
	}
}

class Content extends React.Component {

	constructor(props){
		super(props);
		console.log('Content constructor called')
	}


	componentWillMount() {
		console.log('Component WILL MOUNT!')
	}

	componentDidMount() {
		console.log('Component DID MOUNT!')
	}

	//Called when props is passed to component
	componentWillReceiveProps(newProps) {
		console.log('Component WILL RECEIVE PROPS!')
	}

	shouldComponentUpdate(newProps, newState) {
		console.log('ShouldComponentUpdate');
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('Component WILL UPDATE!');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('Component DID UPDATE!');
	}

	componentWillUnmount() {
		console.log('Component WILL UNMOUNT!')
	}

	render() {
		return (
			<div>
				<h3>{this.props.myNumber}</h3>
			</div>
		);
	}
}
