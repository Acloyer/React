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

    return (
        <Form method="post" id="task-form">
            <p>
                <span>Название</span>
                <input
                    placeholder="Название вашего таска"
                    type="text"
                    name="name"
                    defaultValue={task.first}
                />
            </p>
            <label>
                <span>Описание</span>
                <textarea
                    type="text"
                    name="Opisanie"
                    rows={3}
                    defaultValue={task.twitter}
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
                <div class="space-y-3">
                <div class="flex space-x-2">
                    <div class="flex h-5 items-center">
                    <input type="checkbox" id="example8" name="checkGroup1" class="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                    </div>
                    <label for="example8" class="flex space-x-2 text-sm">
                    <div class="font-medium text-gray-700">
                        
                    </div>
                    </label>
                </div>
                </div>
            </p>
        </Form>
    );
}

export default Edittask;