import { useEffect, useState } from "react";

import { todosRequest } from "../../api/request/todosRequest";
import { TodosList } from "../../components/todos_list/TodosList";

const TodosPage = () => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        todosRequest.getAll().then(({ data }) => setTodos([...data]))
    }, [])

    return (
        <div style={{ width: '100%', margin: '0 auto'}}>
            <h2>Todos</h2>
            <TodosList todos={todos}/>
        </div>
    );
};

export { TodosPage };