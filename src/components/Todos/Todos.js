import { useEffect, useState } from "react";

import { todoService } from "../../services";
import { Todo } from "../Todo/Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todoService.getAll().then(({ data }) => setTodos([...data]))
    }, [])

    return (
        <div>
            {todos.map(value => <Todo key={value.id} todo={value}/>)}
        </div>
    );
};


export { Todos };