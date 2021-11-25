import {Link} from "react-router-dom"
import PHOTO from '../../assets/image/PHOTO.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import {Container } from 'react-bootstrap';

import './style.css';

export default function Footer() {
	return (
			<footer className="wrapper pt-5 ">
				<div className="container-fluid text-center">
					<Container>
					<div className="row">
						<div className="col-md-6 mt-md-0 mt-3 about-side">
							<img src={PHOTO} alt='logo' className='logo-footer mb-2'/>
							<p >لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص </p>
							<div className='icon col-md-6 mt-md-0 mt-3 as__circle'>
							<Link to="/" >							 

							<div className="circle__footer">

<FontAwesomeIcon icon={faInstagram} />
</div>
</Link>
				 
								<Link to="/" >
									<div className="circle__footer">
										
									<FontAwesomeIcon icon={faFacebookSquare} />
									</div>
								</Link>
								<Link to="/" >							 
								<div className="circle__footer">

									<FontAwesomeIcon icon={faInstagram} />
									</div>
	
								</Link>
			 
								</div>
						</div>

						<hr className="clearfix w-100 d-md-none pb-0"/>

						<div className="col-md-2 mb-md-0 mb-3">
 							<ul className="list-unstyled ">
								<li><a href="#">القائمة</a></li>
								<li><a href="#">الرئيسية</a></li>
								<li><a href="#">التطبيق</a></li>
								<li><a href="#">اتصل بنا</a></li>
								<li><a href="#">الشروط </a></li>
								<li><a href="#">من نحن</a></li>

							</ul>
						</div>
						<div className="col-md-2 mb-md-0 mb-3">
 							<ul className="list-unstyled ">
							<li><a href="#">المميزات</a></li>
								<li><a href="#">أكل طازج</a></li>
								<li><a href="#">توصيل</a></li>
							</ul>
						</div>
						 
					</div>
					</Container>
				</div>
			</footer>
	);
}

