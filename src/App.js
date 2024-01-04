import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Lists from './components/lists/Lists'
import Layout from './components/Layout';
import './assets/global.scss'
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem('todos'))

    if(getTodos){
      setTodos(getTodos)
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if(todo.length < 5){
      setError("please enter at least 5 characters");
      return false;
    }
    setTodos([...todos , {id : Date.now(), title : todo , done : false}])
    setError(null);
    setTodo('')
  }

  const deleteTodo = (todoId) => {
    if(window.confirm('are you sure you want to delete it?')){
      const updateTodos = todos.filter((item) => item.id !== todoId)
      setTodos(updateTodos)
    }
  }

  return (
    <ChakraProvider>
    <Layout>
      <Header />
      <Form 
      submitHandler={submitHandler}
      todo={todo}
      change={(e) => setTodo(e.target.value)}
      error={error}
      />
      <Lists deleteTodo={deleteTodo} todos={todos}/>
    </Layout>
    </ChakraProvider>

  );
}

export default App;
