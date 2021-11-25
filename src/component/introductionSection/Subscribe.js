import React,{useState} from 'react'
import { Container} from "react-bootstrap";
import calendar from '../../assets/image/calendar.png'

import noTouch from '../../assets/image/noTouch.png'

const Dates = [1, 4, 9, 16,25];

 
function Subscribe() {
    const [toggle,setToggle] = useState(false);
    const [active, setActive] = useState(false);
    const [visable, setVisable] = useState(false);
    const [aciveNo, setAciveNo] = useState(false);

     const toggleIt =()=>{
      setAciveNo(true)
      }
      const handleVisable=()=>{
        setVisable(true)
    }
      const handleActive=()=>{
        setActive(true)
    }
    return (
<Container> 
        <div className="Subscribe">

 					<h1 className='h1 '>اختر الاشتراك المناسب لك  </h1>
<div className="contant">
<div className="first__Subscribe">
           <img src={calendar} alt="image" />
<div className="Subscribe__firstblock">
 <span className="Subscribe__firstblock__first__P">أيام</span>
<span className="Subscribe__firstblock__secand__P">  اختر عدد الأيام  </span>

</div>  

         </div>  
  
         <div className="date">
         {Dates.map((Datess) => 

          <button onClick={handleActive} 
          
       className={active?"select__number":"select"}>{Datess}</button>
          )}

         </div>  


          </div>
          <br />
          <div className="contants">
          <div className="contantS">
<div className="food__first__Subscribe">
           <img src={noTouch} alt="image" />
  <span className="p">    هل لديك حساسية من طعام معين؟    </span>

 
         </div>  
  
         <div className="choice">
 <div className="sa">
 <button  
          onClick={toggleIt} 
          className={aciveNo?"select__number":"select"}> لا</button>

          <button  
          onClick={handleVisable} 
          className={visable?"select__number":"select"}> نعم</button>
          
         </div>  
 
  </div>  
  
          </div>
          {
            visable?(
<div className="choose__yes">
<p className="P__text__area">حدد أنواع الطعام :</p>
<textarea className="text__area">اكتب هناا..</textarea>
         </div>  
            )
            :(<></>)
          }
           
         </div>
         </div>

         </Container>
    )
}

export default Subscribe
