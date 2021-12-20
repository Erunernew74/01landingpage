import React from 'react'
import Nav from './Nav'

export const Layouts = ({ children }) => {
    return (
        <>
        <Nav />
           <div>{children}</div> 
        </>
    )
}