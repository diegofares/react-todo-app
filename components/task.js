const Task = ({ props, addFav, removeFav, handleChecked }) => {
    return (
        <div className="row taskItem my-3 mx-2 p-2" key={props.key}>
            <div className="col-2  text-center">
                <input type="checkbox" checked={props.completed} onChange={() => handleChecked(props.id)}></input>
            </div>

            <div className="col-8">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
            <div className="col-2 text-center">
                <button onClick={() => {
                    props.fav ?
                        removeFav(props.id)
                        :
                        addFav(props.id)
                }} >
                    <i className={props.fav ? "bi-star-fill" : "bi-star"}></i>
                </button>
            </div>

        </div>
    )
}

export default Task;