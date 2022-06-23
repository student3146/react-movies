function Movie(props) {
    const {Title, Year, imdbID, Type, Poster} = props;
    return <div id={imdbID} className="card">
        <div className="card-image waves-effect waves-block waves-light">
            {
                Poster === 'N/A' ? <img className="activator" src={`https://via.placeholder.com/300x250?text=${Title}`}/> : <img className="activator" src={Poster}/>
            }

        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{Title}<i
                className="material-icons right"></i></span>
            <p>{Year} <span className='right'>{Type}</span></p>
        </div>
    </div>
}

export {Movie}