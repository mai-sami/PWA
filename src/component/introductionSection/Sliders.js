import React from 'react'
import Slider from "react-slick";
import {HomeWrapper} from './Style'
import recipes from '../../assets/image/recipes.png'
import cardFeatured from '../../assets/image/cardFeatured.jpg'
import locallysourced from '../../assets/image/locallysourced.png'

var part= [{ name: "     المكونات     ", type:" بقدونس، جرجير، روبيان، مع جبنة بارميزان قليلة الدسم وصلصة سيزر ",image:cardFeatured  },
{ name: "     معلومة عن الطبق     ", type:"يحتوي الجرجير على نسبة كبيرة من الفيتامينات والعناصر الغذائية التيعد على علاج الأمراض والوقاية منها مثل حماية الجسم من الأورام السرطانية"
,image:locallysourced },
{ name: "     المصدر     ", type:" أصل كلمة سلطة مشتق من اختصار كلمة herba salata باللغة اللاتينيه ومعناها الخضروات المملحة"
,image:recipes },

                  ];
 
export default  function Sliders() {
 

    var settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1
   };
   return (
     <div className="slid"> 
 <HomeWrapper> 
 
     <Slider  className="cont__slider" {...settings}>
 
       <div>
 
         <p className="cont__slider__title">سلطة الروبيان والجرجير</p>

         <div className="first">
           <img src={cardFeatured} alt="image" />
<div className="firstblock">
  <br />
<span className="firstblock__first__P">المكونات</span>
<p className="firstblock__secand__P">بقدونس، جرجير، روبيان، مع جبنة بارميزان قليلة الدسم وصلصة سيزر</p>

</div>  

         </div>  

         </div>  
         <div>
 
 <p className="cont__slider__title">سلطة الروبيان والجرجير</p>

 <div className="first">
   <img src={cardFeatured} alt="image" />
<div className="firstblock">
<br />
<span className="firstblock__first__P">المكونات</span>
<p className="firstblock__secand__P">بقدونس، جرجير، روبيان، مع جبنة بارميزان قليلة الدسم وصلصة سيزر</p>

</div>  

 </div>  

 <div className="first">
   <img src={recipes} alt="image" />
<div className="firstblock">
<br />
<span className="firstblock__first__Py">معلومة عن الطبق</span>
<p className="firstblock__secand__P">يحتوي الجرجير على نسبة كبيرة من الفيتامينات والعناصر الغذائية التي تساعد على علاج الأمراض والوقاية منها مثل حماية الجسم من الأورام السرطانية
</p>

</div>  

 </div>  

 <div className="first">
   <img src={locallysourced} alt="image" />
<div className="firstblock">
<br />
<span className="firstblock__first__PO">المصدر</span>
<p className="firstblock__secand__P">  أصل كلمة سلطة مشتق من اختصار كلمة herba salata باللغة اللاتينيه ومعناها الخضروات المملحة
</p>

</div>  

 </div>  
 <div className="first__secand">
<div className="white__box">
 <div className="circle__food">
   Kcal
   </div>
     <div className="qq">
   <p className="P__md">343</p>
   <p className="P__xs">سعرة حرارية</p>
</div>  
</div>  
<div className="white__box__color">
 <div className="white__box__text">
 
<span >3</span>
<p>غرام</p>

  </div>  

     <p className="Prooteen">كربوهيدرات  </p>
</div>  



<div className="white__box__color__red">
 <div className="white__box__text">
 
<span >33</span>
<p>غرام</p>

  </div>  

     <p className="Prooteen">بروتين  </p>
</div>  



<div className="white__box__color__green">
 <div className="white__box__text">
 
<span >21</span>
<p>غرام</p>

  </div>  

     <p className="Prooteen">دهون  </p>
</div>  
    </div>  
    
 </div>  

 
    </Slider>
     

  </HomeWrapper>
  </div>

     );
 }
 