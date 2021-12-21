import React from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/Gi'


const Nav = ({ children }) => {
    return (
        <>
            {/* header sectio  */}
            <header>
                <Link href='/'><a className='logo'><span>Best</span>App</a></Link>
                
                <input type='checkbox' id='menu-bar' />
                <label htmlFor='menu-bar' className='GiHamburgerMenu'><GiHamburgerMenu /></label>
                <nav className='navbar'>
                    <Link href='/'><a>Home</a></Link>
                    <Link href='/Feauters'><a>Feauters</a></Link>
                    <Link href='/About'><a>About</a></Link>
                    <Link href='/Review'><a>review</a></Link>
                    <Link href='/Pricing'><a>pricing</a></Link>
                    <Link href='/Contact'><a>Contact</a></Link>
                </nav>
            </header>
            <div>{children}</div>
        </>
    )
}

export default Nav
