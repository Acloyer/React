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
                    <Favorite task={task} />
                </h1>
                <h3>
                    {task.description? (
                        <>
                            {task.description}
                        </>
                    ) : (
                        <i>No Description</i>
                    )}{" "}
                    <Favorite task={task} />
                </h3>
                <h4>
                </h4>

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

function Favorite({ task }) {
    // yes, this is a `let` for later
    // let favorite = task.favorite;

    return (
        <>
        
        </>
        // <Form method="post">
        //     <button
        //         name="favorite"
        //         value={favorite ? "false" : "true"}
        //         aria-label={
        //             favorite
        //                 ? "Remove from favorites"
        //                 : "Add to favorites"
        //         }
        //     >
                // {/* {favorite ? "★" : "☆"} */}
            // </button>
        // </Form>
    );
}

export default Task;