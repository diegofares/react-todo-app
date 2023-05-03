import Head from 'next/head'
import { useState } from "react";
import Header from "./header";
import TaskList from "./tasksList";

const App = () => {
    // const [selectedHouse, setSelectedHouse] = useState();
    const [listCompletedTasks, setListCompletedTasks] = useState(false);
    const [showStarredOnly, setShowStarredOnly] = useState(false);

    const handleShowCompleted = () => {
        console.log("clicked");
        setListCompletedTasks(true);
    }
    const handleShowPending = () => {
        console.log("clicked");
        setListCompletedTasks(false);
    }
    const handleFilterStarred = () => {
        console.log("Star clicked");
        showStarredOnly ? setShowStarredOnly(false) : setShowStarredOnly(true);
    }

    return (
        <>
            <Head>
                <title>React TODO App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>

            </Head>
            <Header appTitle="TODO App" onShowStarred={handleFilterStarred} onShowCompleted={handleShowCompleted} onShowPending={handleShowPending} showStarredOnly={showStarredOnly} />
            <main>
                <TaskList listCompletedTasks={listCompletedTasks} showStarredOnly={showStarredOnly} />
            </main>
        </>
    );
}

export default App;