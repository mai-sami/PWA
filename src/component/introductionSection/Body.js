import React from 'react'
import {Card ,Container } from 'react-bootstrap';
import Sliders from './Sliders'
import support from '../../assets/image/support.png'
import user from '../../assets/image/user.png'
import veganfood from '../../assets/image/veganfood.png'
import orderfood from '../../assets/image/orderfood.png'
import consulting from '../../assets/image/consulting.png'
import delivery from '../../assets/image/delivery.png'
var DataCards= [{ name: "     طبيعي     ", role:"subscribe",type:"    أكلنا طبيعي ١٠٠٪ ونستخدم محليات طبيعية مثل العسل وسكر جوز الهند",image:veganfood  },
{ name: "     الاشتراكات     ", type:" بقدونس، جرج ر ",role:"normal",image:user  },
{ name: "     توصيل     ", type:" بقدونس، جرج ر ",image:delivery, role:"natural"  },
{ name: "     التطبيق     ",role:"orderfood", type:"  يمكنكم الاشتراك بكل سهولة باستخدام التطبيق أو الموقع الالكتروني",image:orderfood  },
{ name: "     خدمة العملاء", role:"support",type:" بقدونس، جرج ر ",image:support  },
{ name: "     الاستشارة     ", role:"consulting", type:"    فريق خدمة العملاء المتكون من ٢٠ موظف وموظفة مستعد ومتواجد لمساعدتكم دائماً وبأي وقت     ",image:consulting  },
                  ];
  function Body() {
    //   const[borderCard,setBorderCard]=useState([
    //       {id:1,color:}
    //   ])

    const getBadgeColor = role => {
		switch (role) {
			case "natural":
				return "red";
			case "subscribe":
				return "green";
		  case "normal":
			  	return "#F4BB50";
			case "orderfood":
				return "#42C4A5";
                case "support":
                    return "#84C504";
                    case "consulting":
                        return "#FF8E63";
			default:
				return "gray";
		}
	};

    return (
        <div className="Body" id="body">
            <div className="text__cinter">
<p className="text__cinterP">قائمة عبارة عن <span className="title__cinter">مطبخ عالمي</span></p>
<p className="p__P">تعرف على اختياراتنا لأفضل الأطباق العالمية</p>
            </div>
 <Sliders />
 <br />
 <div className="secand__section">
 <p className="P_P_P">وجبات صحية في متناول يديدك </p>
<p className="title__cinters">ماذا نقدم؟</p>
  
 
 <Container  > 
 <div className="all__card">

 {DataCards.map((DataCard) => 
      
  <Card  id="cards" style={{ width: '13rem' , border:`1.5px solid ${getBadgeColor(DataCard.role)} `}}>
     <Card.Body id="cards__body">
     <Card.Img variant="top" 
      style={{ width: '3rem' }}
       src={DataCard.image} />
     <Card.Title style={{ color:`${getBadgeColor(DataCard.role)} `}}  id ="title">   {DataCard.name}</Card.Title>

       <Card.Text id="text">
{DataCard.type}       </Card.Text>
    </Card.Body>
  </Card>
 
   )}
      </div>

  </Container>
  </div>

  <br />
 

   
 
         </div>
    )
}
 export default  Body
