import { useQuery, postgrest } from "@/lib/db";

const Home = () => {
    const { data: todos, error, mutate } = useQuery(postgrest.from("todos").select("*"));
    const insert = async (task) =>
        mutate([...todos, ...(await postgrest.from("todos").insert({ task }).select()).data]);
    const markDone = async (id) =>
        (await postgrest.from("todos").update({ done: true }).match({ id })) && mutate();
    const deleteTodo = async (id) =>
        (await postgrest.from("todos").delete().match({ id })) && mutate();

    return (
        <div className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 mb-3">
                    Todos
                </h1>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 main">
                {todos?.map((todo) => (
                    <div className={"todo " + (todo?.done && "line-through")} key={todo.id}>
                        {todo.task}
                        <button onClick={() => markDone(todo.id)}>Mark done</button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>
                ))}
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        insert(event.target.task.value);
                    }}
                >
                    <input type="text" name="task" />
                    <button type="submit">New Todo</button>
                </form>
            </div>
        </div>
    );
};
export default Home;
