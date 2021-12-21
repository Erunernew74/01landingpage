import React from 'react'

const HeaderContact = () => {
    return (
        <>
        <hr />
            <section className='contact' id='contact'>
                <div className='image'>
                    <img src='images/contact-img.png' />
                </div>

                <form>

                    <h1 className='heading'>Contact us</h1>

                    <div className='inputBox' required>
                        <label>Name</label>
                        <input type='text'/>
                        
                    </div>
                    <div className='inputBox' required>
                        <label>Email</label>
                        <input type='email'/>
                        
                    </div>
                    <div className='inputBox' required>
                        <label>Phone number</label>
                        <input type='number'/>
                        
                    </div>
                    <div className='inputBox' required>
                        <label>Message</label>
                        <textarea name='' id='' cols='30' rows='15'></textarea>
                        
                    </div>
                    <input type='submit' className='btn' value='Send message' />

                </form>
            </section>   
        </>
    )
}

export default HeaderContact
