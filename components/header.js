
const Header = ({ onShowStarred, onShowCompleted, onShowPending, showStarredOnly }, props) => {
    return (
        <header className="container">
            <div className="row">
                <div className="col-12">
                    {props.appTitle}
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-4">
                    <button onClick={onShowStarred} className={showStarredOnly ? "btn btn-default btn-warning" : "btn btn-default btn-outline-warning"}>Show starred</button>
                </div>
                <div className="col-4">
                    <button onClick={onShowPending} className="btn btn-default btn-primary">Pending Tasks</button>
                </div>
                <div className="col-4">
                    <button onClick={onShowCompleted} className="btn btn-default btn-primary">Completed Tasks</button>
                </div>
            </div>

        </header>
    )
}

export default Header;