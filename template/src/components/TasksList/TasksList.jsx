import { useSelector } from "react-redux";
import Task from "./Task/Task";

function TasksList() {
    const tasks = useSelector(state => state.tasksReducer);

    return (
        <ul>
            {
                tasks.map(taskData => <Task key={taskData.id} taskData={taskData}/>)
            }
        </ul>
    )
}

export default TasksList;