import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/shared/Navbar";
import MovieDetails from "./components/moviesDetails/MovieDetails";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
import LanguageContext from "./components/context/LanguageContext";
import { Fragment } from "react";
import ScrollButton from "./components/scrollboutton/ScrollButton";

function App() {
    const [language, setLanguage] = useState("en");
    const languageHandler = (lang) => {
        setLanguage(lang);
    };
    console.log(language);
    return (
        <LanguageContext.Provider
            value={{ language, onChangeLanguage: languageHandler }}
        >
            <div className="">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:movieId" element={<MovieDetails />} />
                    <Route
                        path="/searchResult/:movieName"
                        element={<Search />}
                    />
                    <Route path="/favourites" element={<Favourites />} />
                </Routes>
                <Fragment>
                    <ScrollButton />
                </Fragment>
            </div>
        </LanguageContext.Provider>
    );
}

export default App;
