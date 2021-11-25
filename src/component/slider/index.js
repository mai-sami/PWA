import {Carousel , Button} from 'react-bootstrap';
import slider_1 from "../../assets/image/slider_1.jpg"
import Logo from "../../assets/image/logo.png"

import "./style.css"
function Slider() {
	return (
		<div className='container'>
			<Carousel fade>
				<Carousel.Item interval={1000}>
					<img
						className="d-block"
						src={slider_1}
						alt="First slide"/>
					<Carousel.Caption>
						<h1>منصة Slim'n Lite</h1>
						<p>منصة لتقديم خدمات الوجبات الصحية عبر الاشتراكات واعطاء استشارات في الحمية والأكل الصحي تدار من قبل أخصائيين في المجال تسمح للمشتركين ان يقوموا بإدخال البيانات الأساسية والمطلوبة حتى يتم اخراج أفضل النصاحئ والارشادات للبرامج الغذائية المناسبة</p>
						<Button variant="success" className='btn subscribe'>اشترك الان</Button>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1000}>
					<img
						className="d-block"
						src={Logo}
						alt="First slide"/>
					<Carousel.Caption>
						<h1>منصة Slim'n Lite</h1>
						<p>منصة لتقديم خدمات الوجبات الصحية عبر الاشتراكات واعطاء استشارات في الحمية والأكل الصحي تدار من قبل أخصائيين في المجال تسمح للمشتركين ان يقوموا بإدخال البيانات الأساسية والمطلوبة حتى يتم اخراج أفضل النصاحئ والارشادات للبرامج الغذائية المناسبة</p>
						<Button variant="success" className='btn subscribe'>اشترك الان</Button>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
				<img
					className="d-block"
					src={slider_1}
					alt="First slide"/>
				<Carousel.Caption>
					<h1>منصة Slim'n Lite</h1>
					<p>منصة لتقديم خدمات الوجبات الصحية عبر الاشتراكات واعطاء استشارات في الحمية والأكل الصحي تدار من قبل أخصائيين في المجال تسمح للمشتركين ان يقوموا بإدخال البيانات الأساسية والمطلوبة حتى يتم اخراج أفضل النصاحئ والارشادات للبرامج الغذائية المناسبة</p>
					<Button variant="success" className='btn subscribe'>اشترك الان</Button>
				</Carousel.Caption>
			</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block "
						src={slider_1}
						alt="First slide"/>
					<Carousel.Caption>
						<h1>منصة Slim'n Lite</h1>
						<p>منصة لتقديم خدمات الوجبات الصحية عبر الاشتراكات واعطاء استشارات في الحمية والأكل الصحي تدار من قبل أخصائيين في المجال تسمح للمشتركين ان يقوموا بإدخال البيانات الأساسية والمطلوبة حتى يتم اخراج أفضل النصاحئ والارشادات للبرامج الغذائية المناسبة</p>
						<Button variant="success" className='btn subscribe'>اشترك الان</Button>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Slider;
