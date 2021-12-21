import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

export const Layouts = ({ children }) => {
    return (
        <>
        <Nav />
           <div>{children}</div> 
        <Footer />
        </>
    )
}