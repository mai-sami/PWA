import React from 'react'
import { Row, Form, Col } from 'react-bootstrap';

import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function DetailSubsecribe() {
  const [age, setAge] = React.useState('');

  const [taggle, setTaggle] = React.useState(false)
  const taggles = () => {
    taggle ? setTaggle(false) : setTaggle(true)
  }


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="justifys">
      <Form>
        <Row>
          <Col>
            <Form.Label id="lable__details">تفاصيل الاشتراك :  </Form.Label>

          </Col>


        </Row>

        <Row>
          <Col>
            <Form.Label id="lable__details">المدة :    </Form.Label>

            <Form.Label id="lable__data">30      يوم

            </Form.Label>



          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label id="lable__details">نوع البرنامج :    </Form.Label>
            <Form.Label id="lable__data">  تخفيف الوزن  </Form.Label>

          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label id="lable__details">عدد السعرات :    </Form.Label>
            <Form.Label id="lable__data">  1200
              <span id="lable__data__span">   سعرة حرارية  </span>
            </Form.Label>

          </Col>
        </Row>

        <br />

        <Row>
          <Col>

            <div className="div__select" controlId="exampleForm.ControlTextarea1">
              <FormLabel id="details" component="legend">      هل ترغب بتوصيل الوجبات إلى مكانك؟</FormLabel>



              <FormControlLabel value="female" onClick={taggles} control={<Radio />} label="نعم " />
              <FormControlLabel value="male" control={<Radio />} label="لا" />

            </div>
          </Col>
        </Row>


        {taggle ?
          <div >
            <FormControl
              fullWidth>
              <Select
                className="css-root"
                labelId="demo-simple-select-label"
                id="demo-simple-select"

                onChange={handleChange}>
                <option  >اختر المنطقة</option>

                < MenuItem  id="MenuItem">
                 <span>   الدمام
                </span>
                <span>   تكلفة التوصيل: 200 ريال</span>
                 </ MenuItem >
                 < MenuItem  id="MenuItem">
                 <span>   الدمام
                </span>
                <span>   تكلفة التوصيل: 200 ريال</span>
                 </ MenuItem >
                 < MenuItem  id="MenuItem">
                 <span>   الدمام
                </span>
                <span>   تكلفة التوصيل: 200 ريال</span>
                 </ MenuItem >              </Select>
            </FormControl>

            <Form.Control
              placeholder="أدخل العنوان   "
              id="pre"

            />

            <Form.Control
              placeholder="مكان مميز بعنوانك  "
              id="pre"

            />
          </div >
          : <p></p>}
      </Form>

      <br />
      <Row>
        <Col xs="auto" className="my-1">
          <Form.Label id="lable__details">   التكلفة الإجمالية :  </Form.Label>
          <Form.Label id="lable__data__color">  1200
            <span id="lable__data__color">   سعرة حرارية  </span>
          </Form.Label>

        </Col>
      </Row>


    </div>
  )
}

export default DetailSubsecribe
