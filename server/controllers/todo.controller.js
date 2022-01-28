
// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
const readTodos = async function (req, res) {
  try {
    const todo = await Todo.find({});
    res.status(200).send(todo);
  } catch (error) {
    res.status(200).send(error);
  }
};

const createTodos = async function (req, res) {
  const todo = new Todo(req.body)
  try {
    await todo.save();
    console.log(todo)
    // res.status(200).send(todo);
  } catch (error) {
    res.status(200).send(error);
  }
};

module.exports = ({
  readTodos,
  createTodos
})
