import React, { FC } from 'react'
import ListIcon from './svgs/ListIcon';

interface ListContainerProps {
    children: React.ReactNode;
    title: string;
    rightComponent?: React.ReactNode;
}


const ListContainer = ({children, title, rightComponent}: ListContainerProps) => {
  return (
    <div className='h-100 d-flex flex-column'>
        <div className='d-flex justify-content-between p-2 ps-4 pe-4 border rounded'>
            <div><ListIcon /> <span className="ms-3">{title}</span></div>
            {rightComponent? <div>{rightComponent}</div>: null}
        </div>
        <div className="rounded border mt-2 flex-grow-1">
            {children}
        </div>
    </div>
  )
}

export default ListContainer