import React, { useState } from "react";
 import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
 import './style.css'
import {Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import  TAbs from './TAbs.js'
import  PersonalData from './PersonalData.js'
import  DetailSubsecribe from './DetailSubsecribe.js'
import  Index from './Pay/index'

function getSteps() {
  return [
    " حدد الوجبات",
    "البيانات الشخصية  ",
    "اشترك الآن  ",
   ];
   }

function getStepContent(step) {
 
  
  switch (step) {
  
    case 0:
        
   
      return (
    
        <div className="home__subscribeFirst"> 
 
        <div className="home__section"> 
        <br />
        <span className="home__section_span"> حدد الأيام التي لا ترغب بوصول الوجبات بها</span>
           <div class="md-chips">
     

     <input type="checkbox" name="foo" value="bar2" id="1"/> 
     <label for="1" class="md-chip md-chip-clickable md-chip-hover">  السبت  </label>
     <input type="checkbox" name="foo" value="bar2" id="2"/> 
     <label for="2" class="md-chip md-chip-clickable md-chip-hover">  الأحد  </label>
     <input type="checkbox" name="foo" value="bar2" id="3"/> 
     <label for="3" class="md-chip md-chip-clickable md-chip-hover">   الاثنين </label>
     <input type="checkbox" name="foo" value="bar2" id="4"/> 
     <label for="4" class="md-chip md-chip-clickable md-chip-hover"> الثلاثاء </label>
     <input type="checkbox" name="foo" value="bar2" id="5"/> 
     <label for="5" class="md-chip md-chip-clickable md-chip-hover"> الأربعاء </label>
     <input type="checkbox" name="foo" value="bar2" id="6"/> 
     <label for="6" class="md-chip md-chip-clickable md-chip-hover"> الخميس </label>
     <input type="checkbox" name="foo" value="bar2" id="7"/> 
     <label for="7" class="md-chip md-chip-clickable md-chip-hover"> الجمعة</label>
   </div>
    </div>
    <p className="home__section__P">اختر أطباقك بحرية، سيتم احتساب السعرات حسب برنامجك</p>
    <TAbs/>
   </div>

       );

    case 1:
      return (
        <>
   <PersonalData />
  
         </>
      );
    case 2:
      return (
        <>
          <DetailSubsecribe />
          
        </>
      );
  
    default:
      return "unknown step";
  }
}

const Home = () => {
   const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const [show, setShow] = useState(true);

  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
     setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };
 

  return (
      <div className="home__subscribe"> 
    <Container  >
    <br />               
      <Stepper  alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
         
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
             <Step  {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
    <Link className="linls" to="/pay">
        <Typography id="text__Massge" variant="h3" align="center">
       الطلب قيد المراجعة  .......  
        </Typography>
        </Link>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
                     <Button
             variant="contained"
             className="next"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "الدفع الأن" : "التالي"}
          </Button>
          <Button
              disabled={activeStep === 0}
            onClick={handleBack}
            className="next"

          >
السابق          </Button>
        </>
      )}
    </Container>
    </div>
   );
};

export default Home;