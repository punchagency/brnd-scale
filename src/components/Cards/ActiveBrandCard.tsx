import React from 'react';
import ActiveIcon from '../svgs/ActiveIcon';

function ActiveBrandCard({image, earning, commission, title}:any) {
    return (
        <div className='card' style={{height: "317px"}}>
            <div className='card-body'>
                <div className='row flex-column'>
                    <div className='col'>
                        <p style={{fontSize: "14px", color: "#605454"}}>{title}</p>
                    </div>
                    <div className='col border' style={{maxHeight: "115px", overflow: "hidden"}} >
                        {image}
                    </div>
                    <div className='col d-flex justify-content-between mt-3' style={{fontSize: "10px", color: "#6C6262"}}>
                        <span className=''>Earned : {earning} <ActiveIcon /></span>
                        <span className=''>Commission : {commission} <ActiveIcon /></span>
                    </div>
                    <div className='col flex-column mt-3'>
                        <button className='btn btn-outline-light border border-dark text-dark d-block w-100'>Dashboard</button>
                        <button className='btn btn-outline-light border border-dark text-dark mt-2 d-block w-100'>Promote</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActiveBrandCard;