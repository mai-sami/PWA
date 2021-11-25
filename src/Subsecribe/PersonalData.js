import React from 'react'
import { Row,Form } from 'react-bootstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
function PersonalData() {
    return (
        <div className="justify">
            
           <Form>
  <div className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label id="lable__personal">الاسم  </Form.Label>
    <Form.Control id="input__personal" type="text" placeholder=" عبد الرخمن المشهراوي" />
  </div>
  <div className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label id="lable__personal">  رقم الجوال</Form.Label>
    <Form.Control   id="input__personal" placeholder="123456789" />
  </div>
  <div className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label id="lable__personal">   الايميل  </Form.Label>
    <Form.Control  id="input__personal" type="email" placeholder="name@example.com" />
  </div>

   
  <FormLabel component="legend">الجنس</FormLabel>

  <FormControl component="fieldset">
       <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="female" control={<Radio />} label="ذكر" />
        <FormControlLabel value="male" control={<Radio />} label="أنثى" />
        
      </RadioGroup>
    </FormControl>
   <div className="div__select"  controlId="exampleForm.ControlTextarea1">
      <FormLabel component="legend">هل انتي حامل ؟</FormLabel>
        <FormControlLabel value="female" control={<Radio />} label="نعم " />
       <FormControlLabel value="male" control={<Radio />} label="لا" />

        </div>
        <br />
 </Form>
        </div>
    )
}

export default PersonalData
