import Input from "./components/Input";
import {useState} from "react";
import TodoContainer from "./components/TodoContainer";



function App(){

  const[input,setInput]=useState('');

  const[todos,setTodo]=useState([]);


  function InputValue(e){
      setInput(e.target.value);
  }

  function handleClick() {
    if (input !== '') {
      setTodo((prevTodo) => {
        return ([...prevTodo, input])}); // Corrected to return updated array
      setInput(''); // Clear input after adding
    }
  }
  function delTodo(indexToDelete) {
    setTodo((prevTodo) => prevTodo.filter((_, index) => index !== indexToDelete));
  }
  


  return (<main>
  <Input input={input} InputValue={InputValue} handleClick={handleClick} />

  <TodoContainer todos={todos} delTodo={delTodo}/>
</main>);
  
}

export default App;