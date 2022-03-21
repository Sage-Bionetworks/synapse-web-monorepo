import React from 'react'
import { NavLink } from 'react-router-dom'
import { signOut } from 'synapse-react-client/dist/utils/SynapseClient'
import logo from '../assets/favicon.png'

const TopNavBar: React.FunctionComponent = () => {
    const links = [
        {
            text: 'Products',
            path: '/products'
        },
        {
            text: "Profile",
            path: '/authenticated/myprofile'
        },
        {
            text: "Account Settings",
            path: '/authenticated/myaccount'
        }
    ]

    return(
    <React.Fragment>
        <nav className='top-nav'> 
            <NavLink to={'/'}><img src={logo} style={{height:'32px', paddingRight: '20px'}}/></NavLink>
            {links.map(el => 
                <NavLink to={el.path} activeClassName='isSelected' className={`nav-link`} >{el.text}</NavLink>
            )}
            <button style={{float:'right'}} onClick={() => {signOut(()=>{window.location.reload()})}}>Log out</button>
        </nav>
    </React.Fragment>
    )
}

export default TopNavBar