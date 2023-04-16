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
            <div className="py-10">
                <header>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 mb-3">
                            Todos
                        </h1>
                    </div>
                </header>
                <main className="main">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        {todos?.map((todo) => (
                            <div
                                className={"todo " + (todo?.done ? "line-through	" : "")}
                                key={todo.id}
                            >
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
                </main>
            </div>
        </>
    );
};
export default Home;
