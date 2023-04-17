import { useQuery, postgrest } from "@/lib/db";

const Home = () => {
    const { data: todos, error, mutate } = useQuery(postgrest.from("todos").select("*"));
    const insert = async (task) => (await postgrest.from("todos").insert({ task })) && mutate();
    const markDone = async (id) =>
        (await postgrest.from("todos").update({ done: true }).match({ id })) && mutate();
    const deleteTodo = async (id) =>
        (await postgrest.from("todos").delete().match({ id })) && mutate();
    const insertFormHandler = (event) => {
        event.preventDefault();
        insert(event.target.task.value);
    };

    return (
        <div className="mx-auto max-w-7xl px-4 lg:px-8 main my-10">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 mb-3">
                Todos
            </h1>
            {todos?.map((todo) => (
                <div className={"todo " + (todo?.done && "line-through")} key={todo.id}>
                    {todo.task}
                    <button onClick={() => markDone(todo.id)}>Mark done</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            ))}
            <form onSubmit={insertFormHandler}>
                <input type="text" name="task" />
                <button type="submit">New Todo</button>
            </form>
        </div>
    );
};
export default Home;
