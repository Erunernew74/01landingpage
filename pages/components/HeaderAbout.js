import React from "react";
import Link from 'next/link'
import { BsApple } from 'react-icons/Bs'
import { FcGoogle } from 'react-icons/Fc'

const HeaderAbout = () => {
  return (
    <>
      <section className="about" id='about'>
          <h1 className="heading">About the app</h1>

          <div className="column">
            <img src="images/about-img.png" />
          </div>

          <div className="content">
            <h3 className="titleContent">Easy And Perfect Solution For Your Business App</h3>
            <p className="parag">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="parag">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="btn-container">
                <div className="prova">
                    <Link href='/'><a className='btn' id='apple'><BsApple id='iconApple'/>Download</a></Link>
                </div>
                <div className="prova">
                    <Link href='/'><a className='btn' id='google'><FcGoogle id='iconGoogle'/>Download</a></Link>
                </div>
                
            </div>
            
          </div>
      </section>
    </>
  );
};

export default HeaderAbout;
