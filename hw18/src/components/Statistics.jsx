import React from 'react';
import './Statistics.css'

const Statistics = () => {
    return <div className='statistics'>
                <div className='stat-name'>
                    <span className='numbers'>1,761 </span>
                    <span className='text'>Retweets</span>
                </div>
                <div className='stat-name'>
                    <span className='numbers'>99 </span>
                    <span className='text'>Quote Tweets</span>
                </div>
                <div className='stat-name'>
                    <span className='numbers'>14,7K </span>
                    <span className='text'>Likes</span>
                </div>
            </div>
};

export default Statistics;