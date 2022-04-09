import React from "react";
import Bowl from "../components/Bowl";
import Coffee from "../components/Coffee";


const TimeToRead = ({ timeToRead, style }) => {
    const cups = Math.round(timeToRead / 5);
    if (cups > 5) {
        return (
            <>
                {Array.from({ length: Math.round(cups / Math.E) }).fill(1).map((_, index) => (<Bowl key={index} />))}
            </>
        )
    } else {
        return (
            <>
                {Array.from({ length: cups || 1 }).fill(1).map((_, index) => (<Coffee key={index} style={style} />))}
            </>
        )

    }
}

export default TimeToRead;