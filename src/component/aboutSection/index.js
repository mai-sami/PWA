import aboutImg from "../../assets/image/aboutImg.jpg"
import {Button} from "react-bootstrap";

import "./style.css"

function AboutUs() {
	return (
		<div className='about-us'>
			<div className='row container p-5'>
				<div className="col-md-5 side_img">
					<img src={aboutImg} alt='about' className='w-100'/>
				</div>
				<div className="col-md-5">
					<h1 className='title'>من نحن</h1>
					<p  className='sub-title-about'>
					منصة لتقديم خدمات الوجبات الصحية عبر الاشتراكات واعطاء استشارات في الحمية والأكل الصحي تدار من قبل أخصائيين في المجال تسمح للمشتركين ان يقوموا بإدخال البيانات الأساسية والمطلوبة حتى يتم اخراج أفضل النصائح والارشادات للبرامج الغذائية المناسبة					</p>
					<Button   id='subscribe'> اشترك الان</Button>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
