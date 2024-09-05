const Pagination = ({onNextClick, onPrevClick}) => {
    return (
        <div className="flex place-content-around justify-center">
            <button className="btn btn-outline-primary btn-lg my-3" onClick={onPrevClick}>Prev</button>
            <button className="btn btn-outline-primary btn-lg my-3 mx-3" onClick={onNextClick}>Next</button>
        </div>
    )
}

export default Pagination;