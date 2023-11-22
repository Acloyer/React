import { Form, useLoaderData } from "react-router-dom";
import { gettask } from "../tasks";

export async function loader({ params }) {
    const task = await gettask(params.taskId);
    return { task };
}

function Task() {
    const { task } = useLoaderData();

    return (
        <div id="task">
            <div>
                <h1>
                    {task.name? (
                        <>
                            {task.name}
                        </>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                </h1>
                <h4>
                    {task.description? (
                        <>
                            {task.description}
                        </>
                    ) : (
                        <i>No Description</i>
                    )}{" "}
                </h4>
                <h5>
                    {task.isDone? (
                        <>
                            {task.isDone}
                        </>
                    ) : (
                        <i>No information about task status.</i>
                    )}{" "}
                </h5>

                <div>
                    <Form action="edit">
                        <button type="submit">Edit</button>
                    </Form>
                    <Form
                        method="post"
                        action="destroy"
                        onSubmit={(event) => {
                            if (
                                !window.confirm(
                                    "Please confirm you want to delete this record."
                                )
                            ) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <button type="submit">Delete</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Task;