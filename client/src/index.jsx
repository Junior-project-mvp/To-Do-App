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
      status: false,
      completed: [],
    };
    // binding the functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.openWeather = this.openWeather.bind(this);
  }

  // to get the data when refresh the page
  componentDidMount() {
    axios
      .get("/")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  // onChange to set the input as a state
  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      todo: e.target.value,
    });
  }

  // submitting the todo in the list
  handleSubmit() {
    this.state.todo !== ""
      ? this.setState({
          items: [this.state.todo, ...this.state.items],
        })
      : alert("Missing todo !");
  }

  // deleting the todo from the list
  handleDelete(id) {
    const Olditems = [...this.state.items];
    const items = Olditems.filter((elem, i) => {
      console.log(i, id);
      return i !== id;
    });
    this.setState({
      items: items,
    });
  }

  openWeather() {
    this.setState({
      status: true,
      hide: true,
    });
    if (this.state.status === true) {
      this.setState({ status: false });
    }
  }

  render() {
    return (
      <div>
        <div>
          <TitleComp />
        </div>
        <div className="big-container">
          <div className="div-container">
            <Todo // Todo component
              todo={this.state.todo}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
            <ul className="list-container">
              {this.state.items.map((element, i) => {
                return (
                  <TodoList // Todo List component
                    key={i}
                    id={i}
                    value={element}
                    handleChange={this.handleChange}
                    handleDelete={this.handleDelete}
                  />
                );
              })}
            </ul>
            <div>{this.state.status ? <WeatherComp /> : null}</div>
          </div>
          <div className="weather-btn-container"></div>
          <button
            className="btn-weather"
            onClick={() => {
              this.openWeather();
            }}
          >
            Check the Weather
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
