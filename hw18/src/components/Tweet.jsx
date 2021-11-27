import React from 'react';
import './Tweet.css'

const Tweet = ({img, text, date, location}) => {
    return <div className='tweet-container'>
                <div className='tweet-content'>
                    <p className='tweet-text'>{text}</p>
                    <img className='image' src={img}/>
                </div>
                <div className='date-location'>
                     <a className='date'>{date}</a>
                    <span> · </span>
                    <a className='location'>{location}</a>
                </div>  
            </div>
}

export default Tweet;