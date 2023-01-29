import style from './Todo.module.css';

const Todo = ({ todo }) => {
    const { id, title, completed } = todo;

    return (
        <div className={style.todo}>
            <div>ID: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completed ? 'Completed' : 'Not done yet'}</div>
        </div>
    );
};

export { Todo };