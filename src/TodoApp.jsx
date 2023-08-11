import { useState } from "react";
import { useGetTodoQuery } from "./store/apis/todosApi";

const TodoApp = () => {


  const [state, setState] = useState(1);
  const {isLoading , data : todo} = useGetTodoQuery(state);

  const handleNext = ()=>{
    setState(state + 1)
  }

  const handlePrev = ()=>{
    if (state <= 1) return
    setState(state - 1)
  }
  
    return (
        <>
            <h1>Todo App</h1>
            <hr/>
            <h4>isLoading...{isLoading ?'true':'false'}</h4>
            <pre>{JSON.stringify(todo)}</pre>

            

            <button onClick={handlePrev}>Prev todo</button>
            <button onClick={handleNext}>Next todo</button>

        </>
    );
}

export default TodoApp;
