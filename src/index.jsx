import React from 'react';
import {render} from 'react-dom';
import TodoForm from './components/todoForm.jsx';

//Container component
class App extends React.Component {
  render () {
    return (
    	<div>
    		<TodoForm />
    	</div>
    );
  }
}

render(<App/>, document.getElementById('app'));