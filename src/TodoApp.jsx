import { useGetTodoQuery } from "./store/apis/todosApi";

const TodoApp = () => {

  const {data: todos = [] , isLoading , } = useGetTodoQuery(1);
  
    return (
        <>
            <h1>Todo App</h1>
            <hr/>
            <h4>isLoading...{isLoading ?'true':'false'}</h4>
            <pre>...</pre>
            <ul>
            {
                todos.map(todo => (
                    <li key={todo.id}>
                       <strong>{todo.completed ? 'done':'pending'}</strong> {todo.title}
                    </li>
                ))
            }

            </ul>

            <button>Next todo</button>
        </>
    );
}

export default TodoApp;
