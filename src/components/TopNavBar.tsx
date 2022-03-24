import React, { useEffect, useState } from 'react'
import { NavLink, withRouter, useLocation } from 'react-router-dom'
import { signOut } from 'synapse-react-client/dist/utils/SynapseClient'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import logo from '../assets/favicon.png'

const links = [
    // {
    //     text: 'Products',
    //     path: '/products'
    // },
    {
        text: "Profile",
        path: '/authenticated/myprofile'
    },
    {
        text: "Account Settings",
        path: '/authenticated/myaccount'
    }
]

const TopNavBar: React.FunctionComponent = () => {
    const { accessToken } = useSynapseContext()
    const [isVisible, setIsVisible] = useState(!!accessToken)
    const location = useLocation()

    useEffect(() => {
        if (!accessToken) {
            setIsVisible(false)
        } else {
            setIsVisible(!!links.find(el => el.path === location.pathname))
        }
      }, [accessToken, location])
    
    
    return(
    <>
        {isVisible && <nav className='top-nav'> 
            <NavLink to={'/'}><img src={logo} alt="Sage Bionetworks logo" style={{height:'32px', paddingRight: '20px'}}/></NavLink>
            {links.map(el => 
                <NavLink to={el.path} key={el.text} activeClassName='isSelected' className={`nav-link`} >{el.text}</NavLink>
            )}
            <button style={{float:'right'}} onClick={() => {signOut(()=>{window.location.reload()})}}>Log out</button>
        </nav>}
    </>
    )
}

export default withRouter(TopNavBar)