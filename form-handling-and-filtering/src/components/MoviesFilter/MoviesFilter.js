// src/components/FilterMovies.js

import { useState } from "react";

function FilterMovies({ showFilteredMovies }) {
    const [firstLetter, setFirstLetter] = useState("All");

    const handleSelect = e => {
        setFirstLetter(e.target.value)
        showFilteredMovies(e.target.value)
    }

    return (
        <div className="FilterMovies">
            <label>Show movies by first letter:</label>
            <select value={firstLetter} onChange={handleSelect}>
                <option value="All">All</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="S">S</option>
                <option value="T">T</option>
            </select>
        </div>
    );
}

export default FilterMovies;
