import React from "react";
import styles from './Newsletter.module.css'



const HeaderNewsLetter = () => {
  return (
    <>
      <div className="newsletter" id={'styles.newsletter'}>
        <h3 className="titleNewsletter">Subscribe for news Feauters</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <form>
          <input type="email" placeholder="enter your email" />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
};

export default HeaderNewsLetter;
