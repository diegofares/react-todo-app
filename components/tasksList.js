import { useState } from "react";
import Task from "./task";
import AddTaskModal from "./addTaskModal";

const list = [
    {
        id: 1,
        name: "Buy Milk",
        description: "Buy at least 2",
        completed: false,
        fav: false
    },
    {
        id: 2,
        name: "Task 2",
        description: "Description for task 2",
        completed: false,
        fav: false
    },
    {
        id: 3,
        name: "Task 3",
        description: "Description for task 3!!",
        completed: false,
        fav: true
    }
]



const TaskList = (props) => {

    const [taskList, setTaskList] = useState(list);

    const getPendingTasksCount = () => {
        const pendingTasks = taskList.filter(task => task.completed === false);
        return pendingTasks.length;
    }
    const handleChecked = (taskID) => {
        console.log(taskID);
        const newTaskList = taskList.map(task => {
            if (task.id === taskID) {
                return ({
                    ...task,
                    completed: !task.completed
                }
                )
            } else {
                return ({
                    ...task
                }
                )
            }
        })
        setTaskList(
            newTaskList
        )
    }
    const addFav = (taskID) => {
        console.log(taskID);
        const newTaskList = taskList.map(task => {
            if (task.id === taskID) {
                return ({
                    ...task,
                    fav: true
                }
                )
            } else {
                return ({
                    ...task
                }
                )
            }
        })
        setTaskList(
            newTaskList
        )
    }
    const removeFav = (taskID) => {
        console.log(taskID);
        const newTaskList = taskList.map(task => {
            if (task.id === taskID) {
                return ({
                    ...task,
                    fav: false
                }
                )
            } else {
                return ({
                    ...task
                }
                )
            }

        })
        setTaskList(
            newTaskList
        )
    }
    const handleAddTask = (name, description) => {
        const newTaskList = [
            ...taskList,
            {
                id: taskList.length + 1,
                name: name,
                description: description,
                completed: false,
                fav: false
            }

        ]
        setTaskList(
            newTaskList
        )
    }

    return (
        <>
            <div className="container">

                {
                    taskList.map(task => {
                        const taskComponent = <Task key={task.id} props={task} addFav={addFav} removeFav={removeFav} handleChecked={handleChecked} />

                        if (props.listCompletedTasks) {
                            if (task.completed) {
                                return (
                                    taskComponent
                                )

                            }
                        } else {
                            if (!task.completed) {
                                if (props.showStarredOnly) {
                                    if (task.fav) {
                                        return (
                                            taskComponent
                                        )
                                    }
                                } else {
                                    return (
                                        taskComponent
                                    )
                                }
                            }
                        }

                    })
                }
            </div>
            <div className="container">
                <div className="row py-1" >
                    <div className="col-8">
                        {(getPendingTasksCount() === 0) ? "Congratulations! you have no pending tasks" : "You have " + getPendingTasksCount() + " pending tasks"}
                    </div>
                </div>
                <AddTaskModal handleAddTask={handleAddTask} />
            </div>
        </>

    )
}

export default TaskList;