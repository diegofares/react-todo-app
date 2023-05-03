import { useState } from "react";
import Task from "./task";

const list = [
    {
        id: 1,
        name: "Buy Milk",
        description: "At Coto Store",
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
    const addTask = () => {
        const newTaskList = [
            ...taskList,
            {

            }
        ]
        setTaskList(
            newTaskList
        )
    }

    return (
        <div className="container">

            {
                taskList.map(task => {
                    const taskComponent = <Task key={task.id} props={task} addFav={addFav} removeFav={removeFav} addTask={addTask} handleChecked={handleChecked} />

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

    )
}

export default TaskList;