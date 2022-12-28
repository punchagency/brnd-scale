import React, {FC} from 'react'

const Layout: FC = () => {
    return (
        <div className="row">
            <div className="col-2 border">Side bar</div>
            <div className="col-10 border" >Main content</div>
        </div>
        
   )
}

export default Layout