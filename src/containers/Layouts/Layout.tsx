import React, {FC, useState} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import SideBar from '../../components/SideBar'
import { selectLoggedIn } from '../../features/user/userSlice'
import BrandsManage from '../../screens/BrandsManage'

import AmazonLogo from '../../assets/images/amazon.png';

const Layout: FC = ({children}) => {
  const [showModal, setShowModal] = useState(true);
    const loggedIn = useAppSelector(selectLoggedIn);
    if(loggedIn) {
        if(showModal){
            return <div className={`modal show ${showModal ? 'd-block' : ''}`} tabIndex={-1} >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Login to Amazon</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={()=>{setShowModal(prev=>!prev)}}
                  ></button>
                </div>
                <div className="modal-body text-center">
                  <p>Please connect your amazon account by clicking on the link below.</p>
                  <a href="#"><img className="img img-fluid" src={AmazonLogo} alt="amazon signup" /></a>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={()=>{setShowModal(prev=>!prev)}}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          }
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