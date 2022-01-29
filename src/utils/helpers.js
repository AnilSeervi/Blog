import React from "react";
import Coffee from "../components/Coffee";

export function formatReadingTime(minutes) {
    let cups = Math.round(minutes / 5);
    if (cups > 5) {
        return `${new Array(Math.round(cups / Math.E))
            .fill(<Coffee />)} ${minutes} min read`;
    } else {
        return `${new Array(cups || 1).fill(<Coffee />)} ${minutes} min read`;
    }
}