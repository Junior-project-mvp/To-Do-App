const Todo= require ("../database-mongo/Todo.model")

// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT

const readTodos = (req, res) =>{
  Todo.find({})
  .then((todos)=>{
    console.log(todos)
  })
  .catch(err=>{res.send(err)})
};

const createTodos = (req, res)=>{
  var todo = req.body
  Todo.create(todo)
  .then((result)=>{
    res.send(result)
  })
  .catch((err)=>{
    res.send(err)
  })
};

const editTodo = (req, res)=>{
  var todo = req.body
  console.log(todo)
  Todo.updateOne(todo)
  .then((todo)=>{
    console.log(todo)
    res.send(todo)
  })
  .catch(err=>{res.send(err)})
}

const deleteTodo = (req,res)=>{
  var todo = req.body
  Todo.deleteOne(todo)
  .then((todo)=>{
    res.send(todo)
  })
  .catch(err=>{res.send(err)})
}

module.exports = ({
  readTodos,
  createTodos,
  editTodo,
  deleteTodo
})
