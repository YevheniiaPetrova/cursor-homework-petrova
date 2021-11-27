import React from 'react';
import './Author.css';

const Author = ({name, nickname, photo}) => {
    return <div className='tweet-header'>
                <img className='user-photo' src={photo} />
                <div className='name-container'>
                    <p className='user-name'>{name}</p>
                    <p className='user-nickname'>{nickname}</p>
                </div>
            </div>
}

export default Author;