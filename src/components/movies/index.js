import { useContext, useEffect, useState } from "react";
import Movie from "./Movie";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../../store/slices/MoviesSlice";
import LanguageContext from "../context/LanguageContext";
function Movies(props) {
    const [, setMoviesList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesListFromApi = useSelector(
        (state) => state.moviesList.moviesList
    );
    const { language } = useContext(LanguageContext);
    const dispatch = useDispatch();
    const nextPageHandler = () => {
        setCurrentPage((oldPage) => ++oldPage);
    };

    const previousPageHandler = () => {
        if (currentPage === 1) {
            return false;
        }
        setCurrentPage((oldPage) => --oldPage);
    };

    useEffect(() => {
        dispatch(getAllMovies({ currentPage, language }));
        setMoviesList(moviesListFromApi);
    }, [language, currentPage, dispatch, moviesListFromApi]);
    return (
        <section className="flex flex-col items-center justify-center my-12">
            <div className="flex items-center justify-center flex-wrap space-y-4 space-x-4">
                {moviesListFromApi?.map((movie) => (
                    <Movie {...movie} key={movie.id} />
                ))}
            </div>
            <div className="btn-group my-5">
                <button className="btn" onClick={previousPageHandler}>
                    «
                </button>
                <button className="btn">Page {currentPage}</button>
                <button className="btn" onClick={nextPageHandler}>
                    »
                </button>
            </div>
        </section>
    );
}

export default Movies;
