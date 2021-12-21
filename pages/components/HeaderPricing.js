import React from "react";
import { AiOutlineCheck } from "react-icons/Ai";
import { FaTimes } from "react-icons/Fa";
import Link from "next/link";

const HeaderPricing = () => {
  return (
    <>
      <section className="pricing" id="pricing">
        <h1 className="heading">Our Pricing Plans</h1>
        <div className="boxContainerPricing">
          <div className="boxPricing">
            <h3 className="title">Basic</h3>
            <div className="price">
              $10<span>/monthly</span>
            </div>
            <ul>
              <li>
                <AiOutlineCheck className='checked'/>
                1000+ downloads
              </li>
              <li>
                <AiOutlineCheck className='checked'/>
                no transition fee
              </li>
              <li>
                <FaTimes className='times'/>
                unlimited storage
              </li>
              <li>
                <FaTimes className='times'/>5 downloads
              </li>
            </ul>
            <Link href="/" id="btnPricing">
              <a className="btn">check out</a>
            </Link>
          </div>
          <div className="boxPricing">
            <h3 className="title">Standard</h3>
            <div className="price">
              $15<span>/monthly</span>
            </div>
            <ul>
              <li>
                <AiOutlineCheck className='checked'/>
                1000+ downloads
              </li>
              <li>
                <AiOutlineCheck className='checked'/>
                no transition fee
              </li>
              <li>
                <AiOutlineCheck className='checked'/>
                unlimited storage
              </li>
              <li>
                <FaTimes className='times'/>5 downloads
              </li>
            </ul>
            <div className="btnPrice">
              <Link href="/">
                <a className="btn">check out</a>
              </Link>
            </div>
          </div>
          <div className="boxPricing">
            <h3 className="title">Premium</h3>
            <div className="price">
              $25<span>/monthly</span>
            </div>
            <ul>
              <li>
                <AiOutlineCheck className='checked'/>
                1000+ downloads
              </li>
              <li>
                <AiOutlineCheck className='checked'/>
                no transition fee
              </li>
              <li>
                <AiOutlineCheck className='checked'/>
                unlimited storage
              </li>
              <li>
                <AiOutlineCheck className='checked'/>5 downloads
              </li>
            </ul>
            <Link href="/">
              <a className="btn">check out</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderPricing;
