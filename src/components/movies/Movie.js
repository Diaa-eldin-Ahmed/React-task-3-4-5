import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    addToFavourites,
    removeFromFavourites,
} from "../../store/slices/FavouritesSlice";

function Movie(props) {
    const [isFavourite, setIsFavourite] = useState(false);
    const dispatch = useDispatch();
    const favouriteList = useSelector(
        (state) => state.favouriteList.favouriteList
    );

    useEffect(() => {
        //if the the movie was in favourite, make the heart shaped filled
        //else make the heart shape with no fill for a better UX
        let isMovieInFavourite = favouriteList.findIndex(
            (movie) => movie.id === props.id
        );
        if (isMovieInFavourite === -1) {
            setIsFavourite(false);
        } else {
            setIsFavourite(true);
        }
    }, [favouriteList, props.id]);

    return (
        <div className="card w-96 h-full bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
                    alt={props.title}
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{props.title}</h2>
                <p className="font-bold">Votes: {props.vote_average}/10</p>
                <div className="card-actions">
                    {isFavourite ? (
                        <i
                            className="transition duration-500 ease-in-out fa-solid fa-heart-circle-minus mt-1 text-red-600 w-9 hover:cursor-pointer transform hover:-translate-y-1 hover:scale-110 absolute right-10 bottom-20 text-3xl"
                            onClick={() =>
                                dispatch(removeFromFavourites(props.id))
                            }
                        ></i>
                    ) : (
                        <div
                            className="transition duration-500 ease-in-out fa-solid fa-heart-circle-plus mt-1 text-red-400 w-9 hover:cursor-pointer transform hover:-translate-y-1 hover:scale-110 absolute right-10 bottom-20 text-3xl"
                            onClick={() => dispatch(addToFavourites(props))}
                        ></div>
                    )}
                    <Link className="btn btn-primary" to={`/movie/${props.id}`}>
                        More Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Movie;
