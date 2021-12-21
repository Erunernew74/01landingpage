import React from 'react'
import Link from 'next/link'
import { BsFillTelephoneInboundFill } from 'react-icons/Bs'
import { MdAttachEmail } from 'react-icons/Md'
import { GrMapLocation } from 'react-icons/Gr'

const Footer = () => {
    return (
        <>
            
            <div className='footer'>
                <div className='boxContainerFooter'>
                    <div className='boxFooter'>
                        <h3>About us</h3>
                        <p>Lorem ipsum</p>
                    </div>
                    <div className='boxFooter'>
                        <h3>Quick links</h3>
                        <Link href='/'><a>Home</a></Link>
                        <Link href='/Feauters'><a>Feuters</a></Link>
                        <Link href='/About'><a>About</a></Link>
                        <Link href='/Review'><a>Reviews</a></Link>
                        <Link href='/Pricing'><a>Pricing</a></Link>
                        <Link href='/Contact'><a>Contact</a></Link>
                    </div>
                    <div className='boxFooter'>
                        <h3>Follow us</h3>
                        <Link href='#'><a>Facebook</a></Link>
                        <Link href='#'><a>Instagram</a></Link>
                        <Link href='#'><a>Pinterest</a></Link>
                        <Link href='#'><a>Twitter</a></Link>
                    </div>
                    <div className='boxFooter'>
                        <h3>Contact info</h3>
                        <div className='info'>
                            <BsFillTelephoneInboundFill className='icon'/>
                            <p>+123-456-789<br /> +111-222-333 </p>
                        </div>
                        <div className='info'>
                            <MdAttachEmail className='icon'/>
                            <p>example@gmail.com<br /> example@gmail.com </p>
                        </div>
                        <div className='info'>
                            <GrMapLocation className='icon'/>
                            <p>Milan, Italy - 20100</p>
                        </div>
                    </div>
                </div>
                <h1 className='credit'>&copy; copyright @ 2021 by mr. MDDSOLUTION web Developping</h1>  
            </div>
           
            
        </>
    )
}

export default Footer
