import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo.jsx';
import TodoList from './components/TodoList.jsx';
import NavBar from './components/NavBar.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     todo:"",
     todos:[],
     status:false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    axios.get('/')
  }

  handleChange(e){
    this.setState({
      todo:e.target.value
    })
  }

  handleSubmit(){
    this.state.todo.length !== 0 
    ?
    this.setState({
      todos:[this.state.todo, ...this.state.todos],
      id:this.state.id+1
    })
    :
    alert("Missing todo !")
  }

  handleDelete(){
    this.setState({
      todos:[""],
      status:true
    })
  }
  
  render () {
    return (
    <div>
    <NavBar />
      <h1>Your Todos</h1>
      <Todo todo={this.state.todo} 
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}/>

      <TodoList 
      status={this.state.status}
      todos={this.state.todos}
      handleChange={this.handleChange}
      handleDelete={this.handleDelete}
      />
    </div>
    )
    
    
  }
}

ReactDOM.render(<App />, document.getElementById('app'));