import Introduction from "../../component/introductionSection";
import Feature from  "../../component/featureSection"
import AboutUs from  "../../component/aboutSection"
import Body from  "../../component/introductionSection/Body"
import Subscribe from  "../../component/introductionSection/Subscribe"
import Wight from  "../../component/introductionSection/Wight"
import EndSection from  "../../component/introductionSection/EndSection"
import Footer from  "../../component/footer"

function Home() {
	return (
		<div>
			<Introduction/>
  <Body />
  		<AboutUs />
		  <Subscribe/>
	 	 <Wight />
		 		 <EndSection />  
 			 		 

		</div>
	);
}

function About() {
	return (
		<div className="About__link">
  			<AboutUs />
		</div>
	);
}
function Service() {
	return (
		<div className="Service__link">
		 
  					 <Body/>

		</div>
	);
}
function Comuncation() {
	return (
		<div className="Comuncation__link">
		 
		 <EndSection />


		</div>
	);
}
export   {Home,About,Service,Comuncation};
