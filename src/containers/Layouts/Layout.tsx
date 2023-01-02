import React, {FC} from 'react'
import SideBar from '../../components/SideBar'
import BrandsManage from '../../screens/BrandsManage'

const Layout: FC = ({children}) => {
    return (
        <div className="row h-100">
            <div className="col-2 flex-grow-1 h-100 bg-dark pt-5"><SideBar /></div>
            <div className="col-10  overflow-auto h-100" style={{height: '200px'}}>{children}</div>
        </div>
        
   )
}

export default Layout