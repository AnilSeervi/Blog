// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/styles/normalize.css"
// custom CSS styles
import "./src/styles/style.scss"

// Highlighting for code blocks
// import "prismjs/themes/prism.css"

import React from "react"
import Context from "./src/components/Context"



// wrapRootElement is a Gatsby API function that is called every time Gatsby
// renders the root element.
export const wrapRootElement = ({ element }) => <Context>{element}</Context>