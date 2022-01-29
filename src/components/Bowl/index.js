import React from "react";
import { steam1, steam2, steam3 } from "./Bowl.module.scss";

const Bowl = (props) => {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2.00004 13.7553 2.46213 15.4797 3.33981 16.9999C4.21749 18.52 5.47985 19.7823 7 20.66V22C7 22.2652 7.10536 22.5196 7.29289 22.7071C7.48043 22.8946 7.73478 23 8 23H16C16.2652 23 16.5196 22.8946 16.7071 22.7071C16.8946 22.5196 17 22.2652 17 22V20.66C18.5202 19.7823 19.7825 18.52 20.6602 16.9999C21.5379 15.4797 22 13.7553 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" />
            <line className={steam1} x1="8" y1="3" x2="8" y2="6" />
            <line className={steam2} x1="12" y1="3" x2="12" y2="6" />
            <line className={steam3} x1="16" y1="3" x2="16" y2="6" />
        </svg>
    )
}


export default Bowl