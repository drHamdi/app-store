import React from 'react'

import {FaPhone, FaEnvelope  } from 'react-icons/fa'
import './ContactStyle.css'

const Contact = () => {
  return (
    <div className='contact'>
            <div className='container'>
                <div className='col-1'>
                    <div className='content'>
                        <div><h2>Get in touch</h2>
                            <p> Explore our structured learning paths to discover everything
                                you need to know about building for the modern web.
                                </p>
                        </div>
                        <div className='address'>
                            <p>2096 Yassminet Brn Arouse</p>
                            <p>Software Qualification Name : Dr.Alpha</p>
                            <p>gitHub : drHamdi</p>
                        </div>
                        <div className='icons'>
                            <FaPhone style={{marginRight: '1rem'}} />
                            <p> (+216) 99035431</p>
                        </div>
                        <div className='icons'>
                            <FaEnvelope style={{marginRight: '1rem'}} />
                            <p>hamdiaziz2@gmail.com</p>
                        </div>
                        <div className='careers'>
                            <p>Looking for careers? <span>View all jop openings.</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <form action=''>
                        <input type='text' placeholder='Full name' />
                        <input type='email' placeholder='Email' />
                        <input type='phone' placeholder='Phone' />
                        <textarea name='Message' placeholder='Message' cols='30' rows='10'></textarea>
                        <div className='checkbox'>
                            <div>
                            <input type='checkbox' />
                            </div>
                            <div className='checkbox-text'>
                            <p>By checking this box, you agree to the <span>Privacy Policy</span> and<span>Cookie Policy</span> </p>
                            </div>
                        </div>
                        <button className='button'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Contact