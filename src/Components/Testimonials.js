import React from 'react'

import './TestimonialsStyle.css'

import { FaDatabase } from 'react-icons/fa'


const Testimonials = () => {
  return (
    <div className='testimonial'>
    <div className='container'>
        <div className='outline'>
            <div className='content'>
                <i><FaDatabase/> Staxx</i>
                <p className='body'>
                Stax is a simple & secure way to transfer money, buy airtime,
                & pay bills in Africa without dialling USSD codes or relying on an internet connection.
                </p>
                <div className='name'>
                    <p>Marie Chilvers</p>
                    <p>CEO, Staxx</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Testimonials
