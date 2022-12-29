import React, {FC} from 'react'
import SideBar from '../../components/SideBar'
import BrandsManage from '../../screens/BrandsManage'

const Layout: FC = ({children}) => {
    return (
        <div className="row">
            <div className="col-2 flex-grow-1 h-100 bg-dark pt-5"><SideBar /></div>
            <div className="col-10 border" >{children}</div>
        </div>
        
   )
}

export default Layout