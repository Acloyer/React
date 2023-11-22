import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updatetask } from "../tasks";
import { gettask } from "../tasks";
import { useParams } from "react-router-dom";

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);

    await updatetask(params.taskId, updates);

    return redirect(`/tasks/${params.taskId}`);
}


export async function loader({ params }) {
    const task = await gettask(params.taskId);
    return { task };
}

function Edittask() {
    const { task } = useLoaderData();
    const navigate = useNavigate();
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
                    name="completed1"
                    id="myCheckbox"
                    defaultChecked={task.completed1}
                    onClick={e => {
                        if(e.target.checked){
                            task.completed1 = "on";
                        }
                        else{
                            task.completed1 = "off";
                        }
                        console.log(task.completed1);
                    }}
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