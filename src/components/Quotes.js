import { getRandom } from '@anilseervi/inspirational-quotes';
import React from 'react'

const Quotes = () => {
    const { quote, author } = getRandom();
    return (
        <div className='quote-container'>
            <span className='quote-icon' >&#10077;</span>
            <div>
                <p className="quote-body">{quote} - {author}</p>
            </div>
        </div>
    )
}

export default Quotes
