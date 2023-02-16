import React, {FC} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import SideBar from '../../components/SideBar'
import { selectLoggedIn } from '../../features/user/userSlice'
import BrandsManage from '../../screens/BrandsManage'

const Layout: FC = ({children}) => {
    const loggedIn = useAppSelector(selectLoggedIn);
    if(loggedIn) {
        return (
        <div className="row h-100">
            <div className="col-2 flex-grow-1 p-0 d-none d-lg-block" style={{ maxWidth: '230px'}}><SideBar /></div>
            <div className="col-10 overflow-auto h-100 pb-4 border flex-grow-1 ps-4 pe-4"><Outlet /></div>
        </div>
        
   )
    }
    return  <Navigate to="auth"/>
}

export default Layout