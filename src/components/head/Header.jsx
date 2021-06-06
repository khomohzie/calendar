import React from 'react'
import Notification from './Notification'
import Profile from './Profile'
import Search from './Search'

const Header = () => {
    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-12 col-md-7">
                    <Search />
                </div>

                <div className="col-2 order-3 order-md-2 col-md-2">
                    <Notification />
                </div>

                <div className="col-9 order-2 order-md-3 col-md-3">
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default Header
