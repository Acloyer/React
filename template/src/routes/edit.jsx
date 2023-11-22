import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updatetask } from "../tasks";

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

    await updatetask(params.taskId, updates);

    return redirect(`/tasks/${params.taskId}`);
}

function Edittask() {
    const { task } = useLoaderData();
    const navigate = useNavigate();
    console.log(task);

    return (
        <Form method="post" id="task-form">
            <p>
                <span>Название: </span>
                <input
                    placeholder="Название вашего таска"
                    type="text"
                    name="name"
                    defaultValue={task.name}
                />
            </p>
            <label>
                <span>Описание: </span>
                <textarea
                    type="text"
                    name="description"
                    rows={3}
                    defaultValue={task.description}
                />
            </label>
            <label>
                <span>Выполнено: </span>
                <input
                    type="checkbox"
                    name="completed"
                    defaultChecked={task.completed}
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button
                    type="button"
                    onClick={() => {
                        navigate(-1);
                    }}
                >Cancel</button>
            </p>
        </Form>
    );
}

export default Edittask;