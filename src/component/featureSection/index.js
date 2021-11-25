import {Row , Col, Card} from 'react-bootstrap'
import CardFeatured from '../../assets/image/cardFeatured.jpg'
import "./style.css"

function Feature() {
	return (
		<div className='container feature'>
			<h1 className='header'>مزايا المنصة</h1>
			<p className='sub-title'>
				لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما
			</p>
			<Row xs={1} md={3} className="g-4 mt-4">
				{Array.from({ length: 3 }).map((_, idx) => (
					<Col>
						<Card>
							<Card.Img  src={CardFeatured} />
							<Card.Body>
								<Card.Title>لوريم إيبسوم</Card.Title>
								<Card.Text>
									لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</div>
	);
}

export default Feature;
