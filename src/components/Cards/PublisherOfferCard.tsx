import React from 'react';

function PublisherOfferCard({title, value, date}:any) {
    return (
        <div className='card bg-dark'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-md-12 flex-column text-center text-white'>
                        <span>{title}</span>
                        <h3>{value}</h3>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PublisherOfferCard;