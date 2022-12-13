import React from 'react'

import './PricingStyle.css' 

const Pricing = () => {
  return (
    <div className='pricing'>
            <div className='container'>
                <div className='top-content'>
                    <div>
                        <h2>Project management <span>Business administration</span></h2>
                        <p>Includes every feature we offer plus unlimited projects and unlimited users.</p>
                    </div>
                    <div className='btn-div'>
                        <button className='button'>Get started today</button>
                    </div>
                </div>
                <div className='bottom-content'>
                    <div className='card'>
                        <p><span>Everything you need</span></p>
                        <h3>All-in-one platform</h3>
                        <p>
                        Project management is the process of leading the work of a team to achieve all project goals within the given constraints.[1] This information is usually described in project documentation, created at the beginning of the development process. The primary constraints are scope, time, and budget.[2]
                        The secondary challenge is to optimize the allocation of necessary inputs and apply them to meet pre-defined objectives.
                        </p>
                    </div>
                    <div className='card'>
                        <div>
                            <p>History.</p>
                        </div>
                        <div>
                            <p>Project Management types.</p>
                        </div>
                        <div>
                            <p>Aproaches of project management</p>
                        </div>
                        <div>
                            <p>Benefits realization management</p>
                        </div>
                        <div>
                            <p>Critical path methode</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <p>Critical chain project management</p>
                        </div>
                        <div>
                            <p>Earned value management</p>
                        </div>
                        <div>
                            <p>Iterative and incrementale project management.</p>
                        </div>
                        <div>
                            <p>Learned project management</p>
                        </div>
                        <div>
                            <p>Project lifecycle</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Pricing