/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../search/SearchForm";
import { useSelector } from "react-redux";
import LanguageContext from "../context/LanguageContext";
function Navbar(props) {
    const favouritesCounter = useSelector(
        (state) => state.favouriteList.counter
    );
    const language = useContext(LanguageContext);

    return (
        <div className="navbar bg-black text-white">
            <div className="flex-1 ">
                <Link className="btn btn-ghost normal-case text-xl" to={"/"}>
                    Diaa-MDB
                </Link>

                <div className=" mt-1 ml-10">
                    {/* <span className="indicator-item badge badge-primary">
                        {favouritesCounter}
                    </span>
                    <div className="">
                        <Link
                            className="mx-auto hover:text-red-500"
                            to={"/favourites"}
                        >
                            Favourites
                        </Link>
                    </div> */}
                    <button class="btn gap-1">
                        <Link
                            className="mx-auto hover:text-red-500"
                            to={"/favourites"}
                        >
                            <i className="fa-solid fa-heart text-2xl"></i>
                        </Link>
                        <div class="badge p-1">
                            <span className="indicator-item badge badge-primary">
                                {favouritesCounter}
                            </span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="">
                <div className="mr-2 text-xl">
                    {" "}
                    <i className="fa-solid fa-globe"></i>
                </div>
                <label className="swap mr-10 text-xl">
                    <input type="checkbox" />
                    <div
                        className="swap-on"
                        onClick={() => language.onChangeLanguage("ar")}
                    >
                        EN
                    </div>
                    <div
                        className="swap-off"
                        onClick={() => language.onChangeLanguage("en")}
                    >
                        AR
                    </div>
                </label>
            </div>
            <div className="flex">
                <SearchForm />
            </div>
        </div>
    );
}

export default Navbar;
