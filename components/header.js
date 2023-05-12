
const Header = ({ onShowStarred, onShowCompleted, onShowPending, showStarredOnly }, props) => {
    return (
        <header className="container">
            <div className="row">
                <div className="col-12">
                    {props.appTitle}
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <button
                        onClick={onShowStarred}
                        className="btn"
                    >
                        <i className={showStarredOnly ? "bi-star-fill text-warning" : "bi-star text-warning"}></i>
                    </button>
                    <button onClick={onShowPending} className="btn btn-default btn-primary mx-1">Pending Tasks</button>
                    <button onClick={onShowCompleted} className="btn btn-default btn-primary mx-1">Completed Tasks</button>

                </div>
            </div>

        </header>
    )
}

export default Header;