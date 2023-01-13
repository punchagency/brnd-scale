import React from 'react';

function BrandFeaturesCard({title, value}:any) {
    return (
        <div className='card'>
            <div className='card-body d-flex'>
                <div className='w-50'>
                    <h5>{title}</h5>
                </div>
                <div>
                    <h5>{value}</h5>
                </div>
            </div>
        </div>
    );
}

export default BrandFeaturesCard;