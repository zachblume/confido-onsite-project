import { useQuery, postgrest } from "@/lib/db";

const Home = () => {
    const { data: todos, error, mutate } = useQuery(postgrest.from("todos").select("*"));
    const insert = async (task) => {
        const { data, error } = await postgrest.from("todos").insert({ task }).select();
        if (error) throw error;
        mutate([...todos, ...data]);
    };
    const markDone = async (id) => {
        await postgrest.from("todos").update({ done: true }).match({ id });
        if (error) throw error;
        mutate();
    };
    const deleteTodo = async (id) => {
        await postgrest.from("todos").delete().match({ id });
        if (error) throw error;
        mutate();
    };

    return (
        <>
            <h1>Hello world</h1>
            {todos?.map((todo) => (
                <div className={todo?.done ? "line-through	" : ""} key={todo.id}>
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
        </>
    );
};
export default Home;
