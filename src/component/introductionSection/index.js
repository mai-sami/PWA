import introImg from "../../assets/image/introImg.jpg"
import {Button, Container} from "react-bootstrap";
import "./style.css"
import msg from '../../assets/image/messenger.png'
import { AddToHomeScreen } from 'react-pwa-add-to-homescreen';
 
function Introduction() {
 
	
 	return (
		<div className='introduction'>
			<Container>
 
				<div className='row w-100 justify-content-between'>
					<div className="col-md-6 intro">
						<h1 className='title'>منصة Slim'n Lite </h1>
						<p  className='sub-title'>
							منصة لتقديم خدمات الوجبات الصحية عبر الاشتراكات واعطاء استشارات في الحمية والأكل الصحي تدار من قبل أخصائيين في المجال تسمح للمشتركين ان يقوموا بإدخال البيانات الأساسية والمطلوبة حتى يتم اخراج أفضل النصائح والارشادات للبرامج الغذائية المناسبة
						</p>
						<Button  className='join-now btn'>اشترك الان</Button>
						<Button  className='download-app btn'>حمل التطبيق</Button>
					</div>
					<div className="col-md-6 ">
						<img id="image__section" src={introImg} alt='introImg' className='w-100'/>
					</div>
				</div>
				<div className='support'>
					<img src={msg} alt='msg'/>
				</div>
				
			</Container>
 		</div>
	);
}

export default Introduction;
