import { redirect } from "react-router-dom";
import { deletetask } from "../tasks";

export async function action({ params }) {
    // throw new Error("oh dang!");
    await deletetask(params.taskId);
    return redirect("/");
}