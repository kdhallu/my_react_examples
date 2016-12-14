import React from 'react';
import ReactDOM from 'react-dom';

/*
 /*
 * Class : TodoApp
 * @returns a TodoApp
 */
export default class TodoApp extends React.Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {items: [], text: ''};
	}

	render() {
		return (
			<div>
				<h3>React TODOApp</h3>

				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} value={this.state.text}/>
					<button>{'Add #' + (this.state.items.length + 1)}</button>
				</form>
				<TodoList itemList={this.state.items}/>
			</div>
		);
	}

	handleChange(e) {
		this.setState({text: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();

		if (!this.state.text) {
			return;
		}
		var newItem = {
			text: this.state.text,
			id: Date.now()
		};

		this.setState((prevState) => ({
			items: prevState.items.concat(newItem),
			text: ''
		}));
	}
}

/*
 * Function: Renders TodoList
 * @returns TodoList
 */
class TodoList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.itemList.map(item => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		);
	}
}

class TodoListInputForm extends React.Component {
	render() {
	}
}

