import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo.jsx";
import TodoList from "./components/TodoList.jsx";
import WeatherComp from "./components/WeatherComp.jsx";
import axios from "axios";
import TitleComp from "./components/TitleComp.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      items: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios.get("/").then((response) => {});
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      todo: e.target.value,
    });
  }

  handleSubmit() {
    this.state.todo !== ""
      ? this.setState({
          items: [this.state.todo, ...this.state.items],
        }) && axios.post('/todos', this.state.todo)
        .then((response)=>{
          console.log(response.data)
          res.send(response.data)
        }).catch((err)=>{console.log(err)})
      : alert("Missing todo !");
  }

  handleDelete(id) {
    const Olditems = [...this.state.items];
    const items = Olditems.filter((elem, i) => {
      console.log(i, id);
      return i !== id;
    });
    this.setState({ items: items });
  }

  render() {
    return (
      <div>
        <TitleComp />
        <Todo
          todo={this.state.todo}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <ul>
          {this.state.items.map((element, i) => {
            return (
              <TodoList
                key={i}
                id={i}
                value={element}
                handleChange={this.handleChange}
                handleDelete={this.handleDelete}
              />
            );
          })}
        </ul>
        <WeatherComp />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
