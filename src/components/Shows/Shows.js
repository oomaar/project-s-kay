import React from 'react';
import { selectShows, setShow } from "./showsSlice";
import { useSelector, useDispatch } from "react-redux";

const Shows = () => {
    const dispatch = useDispatch();
    const showing = useSelector(selectShows);

    console.log(showing.shows);

    const showDiv = () => {
        dispatch(setShow({ shows: true }));
    }

    return (
        <div className="box">
            <button className="toggle" onClick={showDiv}>Click</button>

            <div className={`pop ${showing.shows && 'show'}`}>
                <h3 className="text">Testing Text</h3>
                <h3 className="text">Testing Text</h3>
                <h3 className="text">Testing Text</h3>
                <h3 className="text">Testing Text</h3>
            </div>
        </div>
    )
}

export default Shows;
