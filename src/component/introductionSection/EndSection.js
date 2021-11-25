import React from 'react'
import reeson from '../../assets/image/reeson.png'
import {Button} from "react-bootstrap";

function EndSection() {
    return (
        <div className='about-us'>
        <div className='row container p-5'>
            <div className="col-md-4 side_imgs">
                <img src={reeson} alt='reeson' className='image__reson'/>
            </div>
            <div className="col-md-7 ">
                <div className="con__tent__reeson">

                    <div className="section__flex"> 
                <p  className='Title__resson'>
                   لديك استفسار؟
                    </p>
                    <small id="small__reson">
                    سيتواصل معك أحد موظفي خدمة العملاء بأقرب وقت

                    </small>
                    </div>
                 <Button   id='contact__us'>   تواصل معنا</Button>
                </div>
               
            </div>
        </div>
    </div>
    )
}

export default EndSection
