import React from 'react';

//Presentation components
const Title = () => {
	return(
		<p> Hello React Part 4!</p>
	)
};
const TodoInput = ({addTodo}) => {
	let input;

	return(
		<div>
	      <input ref={node => {input = node;}} />
	      <button onClick={() => {addTodo(input.value); input.value = '';}}>+</button>
	    </div>
	);
};
const Todo = ({todo, remove}) => {
	// Each Todo
	return (<li>{todo.text}<button onClick={() => {remove(todo.id)}}>-</button></li>);
};
const TodoList = ({todos, remove}) => {
  	// Map through the todos
  	const todoNode = todos.map((todo) => {
    	return (<Todo todo={todo} key={todo.id} remove={remove}/>) 
	});
 	return (<ul>{todoNode}</ul>);
};

//container components
// Todo Id
window.id = 0;
class TodoForm extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
		  savedTodo: [
		  	{
		  		id:999,
		  		text:'place holder'
		  	}
		  ]
		};
	}
	//Add todo handler
	addTodo(val){
		const todo = {text: val, id: window.id++}
		this.state.savedTodo.push(todo);
		this.setState({savedTodo: this.state.savedTodo});
		console.log(this.state.savedTodo);
	}
	//Remove todo handler
	handleRemove(id){
		const remainder = this.state.savedTodo.filter((todo) => {
			if(todo.id !== id)
			return todo;
		});
		this.setState({savedTodo: remainder});
	}
	render(){
		return(
			<div>
				<Title />
				<TodoInput addTodo={this.addTodo.bind(this)} />
				<TodoList todos={this.state.savedTodo} remove={this.handleRemove.bind(this)} />
			</div>
		);
	}
};

export default TodoForm;