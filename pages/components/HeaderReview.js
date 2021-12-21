import React from "react";

import { AiFillStar } from "react-icons/Ai";

const HeaderReview = () => {
  return (
    <>
      <section className='review'>
        <h1 className='heading'>People's review</h1>
        
        <div className='boxContainer'>

            <div className='box'>

                <div className='user'>
                    <img src="images/pic1.png" />
                    <h3 className="commentUser">Jean Doe</h3>
                    <div className='stars'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <div className='comment'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </div>
                </div>

            </div>

            <div className='box'>

                <div className='user'>
                    <img src="images/pic2.png" />
                    <h3 className="commentUser">John Doe</h3>
                    <div className='stars'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <div className='comment'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </div>
                </div>

            </div>

            <div className='box'>

                <div className='user'>
                    <img src="images/pic3.png" />
                    <h3 className="commentUser">Salma Doe</h3>
                    <div className='stars'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <div className='comment'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </div>
                </div>

            </div>

        </div>
      </section>
    </>
  );
};

export default HeaderReview;
