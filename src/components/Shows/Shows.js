import React from 'react';
import { selectShows, setShow } from "./showsSlice";
import { useSelector, useDispatch } from "react-redux";
import "./Shows.css";

const Shows = () => {
    const dispatch = useDispatch();
    const showing = useSelector(selectShows);

    console.log(showing.shows);

    const showDiv = () => {
        dispatch(setShow({ shows: true }));
    }

    return (
        <div className="boxs">
            <button className="toggles" onClick={showDiv}>Click</button>

            <div className={`pops ${showing.shows && 'shows'}`}>
                <h3 className="text">Testing Text</h3>
                <h3 className="text">Testing Text</h3>
                <h3 className="text">Testing Text</h3>
                <h3 className="text">Testing Text</h3>
            </div>
        </div>
    )
}

export default Shows;
