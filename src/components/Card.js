import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-light-blue dib br4 pa3 ma3 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robot"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;