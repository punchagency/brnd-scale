import React from 'react'
import TableDropdown from './TableDropdown';

import Button from './Button';

const TableToolbar = ({children}:any) => {
  return (
    <div className={`col-12 mt-3 d-flex flex-wrap flex-md-nowrap`}>
      {children}
    </div>
  )
}

export default TableToolbar