import React, {useState} from "react";

const Search = (props) => {
    const {searchMovies = Function.prototype} = props;
    const [search, setSearch] =useState('');
    const [type, setType] = useState('all')



    const handleType = (event) => {
        setType(event.target.dataset.type)
        searchMovies(search, event.target.dataset.type)

    }

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type);
        }
    }



        return <div className="row">
            <div className="input-field">
                <input
                    placeholder='search'
                    type="text"
                    className="validate"
                    onKeyDown={handleKey}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="all"
                               onChange={handleType}
                        checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="movie"
                               onChange={handleType} checked={type === 'movie'} />
                        <span>Movies Only</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="series"
                               onChange={handleType} checked={type === 'series'}/>
                        <span>Series Only</span>
                    </label>
                </div>
                <button className="btn search-btn" onClick={() => searchMovies(search, type)}>Search
                </button>
            </div>
        </div>



}

export {Search}