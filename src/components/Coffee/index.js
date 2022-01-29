import React from "react";
import { steam1, steam2, steam3 } from "./Coffee.module.scss";

const Coffee = (props) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-coffee"
            {...props}
        >
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line className={steam1} x1="6" y1="1" x2="6" y2="4" />
            <line className={steam2} x1="10" y1="1" x2="10" y2="4" />
            <line className={steam3} x1="14" y1="1" x2="14" y2="4" />
        </svg>
    )
}

export default Coffee;