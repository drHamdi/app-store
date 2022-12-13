import React from 'react'
import './FaqStyle.css'

const Faq = () => {
  return (
    <div className='section-faq'>
            <div className='container'>
                <div className='col-1'>
                    <h3>Frequently asked questions</h3>
                    <p>Can't find the answer you're looking for?</p>
                    <p>Reach out to our <span>customer support</span> team.</p>
                </div>
                <div className='col-2'>
                    <div className='faq'>
                        <h5>What are dev tools?</h5>
                        <p>
                        Developer tools (or "development tools" or short "DevTools") are programs
                        that allow a developer to create,test and debug software. 
                        Current browsers provide integrated developer tools, which allow to inspect a website.</p>
                    </div>
                    <div className='faq'>
                        <h5>Why do we use Dev Tools?</h5>
                        <p>Why do we use Dev Tools?
                        It allows you to run lines of JavaScript against the page currently loaded in the browser,
                        and reports the errors encountered as the browser tries to execute your code. To access the console in any browser:
                        If the developer tools are already open, click or press the Console tab.</p>
                    </div>
                    <div className='faq'>
                        <h5>Is SQL a development tool?</h5>
                        <p>Why do we use Dev Tools?
                    It allows you to run lines of JavaScript against the page currently loaded in the browser,
                    and reports the errors encountered as the browser tries to execute your code. To access the console in any browser: 
                    If the developer tools are already open, click or press the Console tab</p>
                    </div>
                    <div className='faq'>
                        <h5>What are dev tools in Java?</h5>
                        <p>What are dev tools in Java?
                        Devtools provides a way to configure global settings that are not coupled with any application.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Faq