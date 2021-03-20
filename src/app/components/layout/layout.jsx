import React from 'react'
import {useHistory} from 'react-router-dom'
import './layout.scss'

const Layout = ({children}) => {
    const history = useHistory()

    const goToTracker = () => {
        history.push('/tracker')
    }
    const goAccount = () => {
        history.push('/profile')
    }

    return (
        <div id="layout">
            <div id="content">
                {children}
            </div>
            <div id="footer">
                <div className="footer-buttons">
                    <div onClick={goAccount} className="button btn-1">ACCOUNT</div>
                    <div onClick={goToTracker} className="button btn-2">TRACKING</div>
                </div>
            </div>
        </div>
    )
}

export default Layout;