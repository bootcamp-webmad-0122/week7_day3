const MovieCard = ({ _id, title, director, IMDBRating, removeMovie, hasOscars }) => {

    function generateScoreLabel(score) {
        if (score > 9) {
            return <span className="green">9+</span>;
        } else if (score < 7) {
            return <span className="red">{score}</span>;
        } else {
            return <span className="black">{score}</span>;
        }
    }

    return (
        <div key={_id} className="MovieCard">
            <h3>{title}</h3>
            <p>Director: {director}</p>
            <p>Rating: {generateScoreLabel(IMDBRating)}</p>

            <hr />
            {hasOscars ? <p>Got the Oscar Award! </p> : <p>Great movie but no Oscars! </p>}
            <hr />

            <button className="btn-delete" onClick={() => removeMovie(_id)}>Delete </button>
        </div>
    )
}

export default MovieCard