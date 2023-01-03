import React, {FC} from 'react'
import SideBar from '../../components/SideBar'
import BrandsManage from '../../screens/BrandsManage'

const Layout: FC = () => {
    return (
        <div className="row h-100">
            <div className="col-2 flex-grow-1 bg-primary pt-5"><SideBar /></div>
            <div className="col-10 pb-4  border" ><BrandsManage /></div>
        </div>
        
   )
}

export default Layout