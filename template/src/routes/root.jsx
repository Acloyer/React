import {
    Outlet,
    Link,
    useLoaderData,
    Form,
    redirect,
    NavLink,
    useNavigation,
    useSubmit
} from "react-router-dom";
import { gettasks, createtask } from "../tasks";
import { useEffect } from "react";

export async function loader({ request }) {
    console.log(
        'lOaded!'
    );

    
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const tasks = await gettasks(q);

    return { tasks, q };
}

export async function action() {
    const task = await createtask();
    return redirect(`/tasks/${task.id}/edit`);
}

function Root() {
    const { tasks, q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();

    return (
        <>
            <div id="sidebar">
                <h1>React Router tasks</h1>
                <div>
                    <Form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search tasks"
                            placeholder="Search"
                            type="search"
                            name="q"
                            defaultValue={q}
                            onChange={(event) => {
                                submit(event.currentTarget.form);
                            }}
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </Form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {tasks.length ? (
                        <ul>
                            {tasks.map((task) => (
                                <li key={task.id}>
                                    <NavLink
                                        to={`tasks/${task.id}`}
                                        className={({ isActive, isPending }) =>
                                            isActive
                                                ? "active"
                                                : isPending
                                                    ? "pending"
                                                    : ""
                                        }
                                    >
                                        {task.first || task.last ? (
                                            <>
                                                {task.first} {task.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {task.favorite && <span>★</span>}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No tasks</i>
                        </p>
                    )}
                </nav>
            </div>
            <div
                id="detail"
                className={
                    navigation.state === "loading" ? "loading" : ""
                }
            >
                <Outlet />
            </div>
        </>
    );
}

export default Root;