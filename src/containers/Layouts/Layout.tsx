import React, {FC} from 'react'
import SideBar from '../../components/SideBar'
import BrandsManage from '../../screens/BrandsManage'

const Layout: FC = () => {
    return (
        <div className="row h-100">
            <div className="col-2 flex-grow-1 h-100 bg-dark pt-5" style={{height: "100%"}}><SideBar /></div>
            <div className="col-10  border" ><BrandsManage /></div>
        </div>
        
   )
}

export default Layout