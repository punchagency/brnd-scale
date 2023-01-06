import React, {FC} from 'react'
import SideBar from '../../components/SideBar'
import BrandsManage from '../../screens/BrandsManage'

const Layout: FC = ({children}) => {
    return (
        <div className="row h-100">
            <div className="col-2 flex-grow-1 p-0" style={{ maxWidth: '230px'}}><SideBar /></div>
            <div className="col-10 overflow-auto h-100 pb-4 border flex-grow-1 ps-4 pe-4">{children}</div>
        </div>
        
   )
}

export default Layout