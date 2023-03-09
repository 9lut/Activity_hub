import React from "react";
import resets from '../_resets.module.css';
import classes from '../App.module.css';
import { Homepage } from "../components/Homepage";

function homepage () {
    return (
        <div className={`${resets.clapyResets} ${classes.root}`}>
            <Homepage />
        </div>
    )
}

export default homepage;