import React from "react";
import Link from 'next/link'

const HeaderFeauters = () => {
  return (
    <>
      <section className='feauters' id='feauters'>
        <h1 className='heading'>app feauters</h1>
        <div className='box-container'>
            <div className='box'>
                <img src="images/f-icon1.png" />
                <h3>Amazing UI design</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link href='/'><a className='btn'>Download</a></Link>
            </div>
            <div className='box'>
                <img src="images/f-icon2.png" />
                <h3>Soft and smooth animations</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link href='/'><a className='btn'>Download</a></Link>
            </div>
            <div className='box'>
                <img src="images/f-icon3.png" />
                <h3>Frendly interceptor</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link href='/'><a className='btn'>Download</a></Link>
            </div>
        </div>
      </section>
    </>
  );
};

export default HeaderFeauters;
