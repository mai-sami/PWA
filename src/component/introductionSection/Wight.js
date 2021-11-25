import React from 'react'
import {Card ,Container } from 'react-bootstrap';
 

import avocado from '../../assets/image/avocado.png'
import NNn from '../../assets/image/NNn.png'
import Path from '../../assets/image/Path.png'
import mesan from '../../assets/image/mesan.png'

var Subs= [{name:"خسارة الوزن", image:mesan,one: "     وجبة فطور     ",  two:"  وجبة غذاء",three:"وجبة عشاء",four:"أطباق جانبية",five:"غذاء"  },
{name:"كيتو", image:avocado,one: "     وجبة فطور     ",  two:"  وجبة غذاء",three:"وجبة عشاء",four:"أطباق جانبية",five:"غذاء"  },
{name:"التوازن",image:NNn, one: "     وجبة فطور     ",  two:"  وجبة غذاء",three:"وجبة عشاء",four:"أطباق جانبية",five:"غذاء"  },
{name:"بناء الجسم",image:Path, one: "     وجبة فطور     ",  two:"  وجبة غذاء",three:"وجبة عشاء",four:"أطباق جانبية",five:"غذاء"  },
 
                    ];
function Wight() {
    return (
        <div className="wight">
            <br />
            <Container>
  
            <div className="all__card__foods">
               {Subs.map((Sub) => 
                   <div>

  <Card id ="card__card__all" border="light" style={{ width: '12rem' }}>
    <div id ="hreader__card">
        
         <Card.Img variant="top" 
      style={{ width: '1.5rem' }}
       src={Sub.image} />
<span className="sub__name">
   {Sub.name}
</span>
        </div>
    <Card.Body  id="cinter__text__body">
      <Card.Title id="T__Ex__t">    تفاصيل الاشتراك</Card.Title>
      <Card.Text id="T__Ex__ts">
          <ol className="ol">
     <li className="li__card"> {Sub.one}  </li>
     <li className="li__card"> {Sub.two}  </li>
     <li className="li__card"> {Sub.three}  </li>
     <li className="li__card"> {Sub.four}  </li>
     <li className="li__card"> {Sub.five}  </li>

     </ol>
      </Card.Text>
      <button className="reall">12300 <small id="sm__All">ريال</small></button>
 <br />
     </Card.Body>
 
        </Card>
        <br />

                        <small className="  muted">100 سعره    </small>
                        </div>

      )}
 
   </div>
</Container>
        </div>
    )
}

export default Wight
