import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import card from '../../assets/image/card.png';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import './style.css'
import succse from '../../assets/image/maps-and-flags.png'

import cloud from '../../assets/image/cloud-computing.png';

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
        '.MuiFormControlLabel-label': checked && {
            color: theme.palette.primary.main,
        },
    }),
);

function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
    /**
     * The value of the component.
     */
    value: PropTypes.any,
};
function Index() {
    const [visable, setVisable] = React.useState(false)
    const [success, setSuccess] = React.useState(false);
    const handleSuccess = () => {
        setSuccess(true)
    }

    const CloseSuccess = () => {
        setSuccess(false)
    }
    const handelVisable = () => {
        setVisable(true)
    }
    return (
        <div className="in__Dex">

            <Container>
                <br />
                <Row  >
                    <Col id="col__padding">
                        <Col >
                            <RadioGroup name="use-radio-group" id="pay__lable" defaultValue="first">
                                <MyFormControlLabel id="pay__lable" value="first" label="بطاقة بنكية" control={<Radio />} />

                                <Col>

                                    <img className="card__Pay" src={card} alt="" />
                                </Col>
                                <br />
                                <MyFormControlLabel value="second" onClick={handelVisable} label="حوالة بنكية" control={<Radio />} />
                            </RadioGroup>
                            <div id="col">
                                <Col  >

                                    <Form.Label id="lable__personal">أدخل كود الخصم  </Form.Label>
                                    <Form.Control id="input__pay" type="text" />
                                </Col>
                                <Col  >

                                    <Form.Label id="lable__personal">       </Form.Label>

                                    <Button id="buuton__personal" type="text">تقديم</Button>
                                </Col>
                            </div>

                            <Col md="auto">
                                <div className="vl"></div>
                            </Col>

                        </Col>
                    </Col>
                    {visable ?
                        <div className="limits">

                            <Col >
                                <div>
                                    <div className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label id="lable__personal">اهلا وسهلا بك عبد الرحمن الشهري، أدخل البيانات الخاصة ببطاقتك  </Form.Label>
                                    </div>
                                    <div className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label id="lable__personal">      اسم المحول  </Form.Label>
                                        <Form.Control id="input__personal" placeholder="  عبد الرحمن الشهري" />
                                    </div>
                                    <div className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label id="lable__personal">   إيصال التحويل    </Form.Label>

                                        <div class="profile-pic">

                                            <img src={cloud} alt="cloud" />
                                            <br />
                                            <label for="file"> أرفق صورة الايصال  </label>

                                            <input type="file" name="files[]" id="file" />
                                        </div>
                                    </div>

                                    <Row className="justify-content-md-center">


                                        <Col xs lg="12">
                                            <Form.Group className='checkbox' controlId="formBasicCheckbox">
                                                <Form.Check id="chan" type="checkbox" label="من خلال تأكيدك للطلب ،يعني أنك توافق على" />
                                                <span id="span__chan">      الأحكام والشروط  </span>
                                            </Form.Group>
                                        </Col>
                                        <Col >

                                            <Button type="submit" id="q__Q" onClick={handleSuccess} className="sigIn-btn mb-0" variant='success'
                                            >
                                                تأكيد
                                            </Button>
                                        </Col>

                                    </Row>
                                    <br />
                                </div>
                            </Col>
                        </div>
                        :
                        <div className="limits">

                            <Col>
                                <Form>
                                    <div className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label id="lable__personal">اهلا وسهلا بك عبد الرحمن الشهري، أدخل البيانات الخاصة ببطاقتك  </Form.Label>
                                    </div>
                                    <div className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label id="lable__personal">  الاسم على البطاقة  </Form.Label>
                                        <Form.Control id="input__personals" placeholder="Abdulrahman Alshihri" />
                                    </div>
                                    <div className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label id="lable__personal">   رقم البطاقة  </Form.Label>
                                        <Form.Control id="input__personal" type="email" placeholder="xx-xxx-xxxx-xx" />
                                    </div>

                                    <Row className="justify-content-md-center">
                                        <Col xs lg="3">
                                            <Form.Label id="lable__personal">    رمز الأمان  </Form.Label>
                                            <Form.Control id="input__pay" type="text" placeholder="CCV" />
                                        </Col>
                                        <Col xs lg="6">    </Col>
                                        <Col xs lg="3">
                                            <Form.Label id=" ">    تاريخ الانتهاء    </Form.Label>
                                            <Form.Control id="input__pay" type="text" placeholder="yy-y-yy" />
                                        </Col>
                                        <Col xs lg="12">
                                            <Form.Group className='checkbox' controlId="formBasicCheckbox">
                                                <Form.Check id="chan" type="checkbox" label="من خلال تأكيدك للطلب ،يعني أنك توافق على" />
                                                <span id="span__chan">      الأحكام والشروط  </span>
                                            </Form.Group>
                                        </Col>
                                        <Col >

                                            <Button type="submit" id="q__Q" className="sigIn-btn mb-0" variant='success'
                                            >
                                                تأكيد
                                            </Button>
                                        </Col>

                                    </Row>



                                    <br />
                                </Form>
                            </Col>
                        </div>
                    }
                </Row>

            </Container>


            <Modal
                show={success}
                onHide={CloseSuccess}
                backdrop="static"
                keyboard={false}
                centered
                id="mod"
            >
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body id="model__pay">
                    <img src={succse} alt="" />
                    <br />
                    <h1 id="yes">   تمت عملية الاشتراك بنجاح</h1>

                    <Col>
                        <Form.Label id="lable__Pay">السيد / </Form.Label>
                        <Form.Label id="lable__pay">  عبد الرحمن الشهري    </Form.Label>

                    </Col>

                    <Col>
                        <Form.Label id="lable__pays">قمت بتسديد مبلغ       </Form.Label>
                        <Form.Label id="lable__pay__color">  2400 ريال    </Form.Label>

                    </Col>
                    <Form.Label id="lable__data__P">   أنت الآن مشترك لمدة ( 30 يوم ). سيتم إرسال رسالة إلى الايميل
<span>mai@jisodhs</span>
                        ل
                        بإكمال الاشتراك وبدء البرنامج الخاص بك    </Form.Label>

                </Modal.Body>
                <Modal.Footer>

                <Button type="submit" id="button__pau" onClick={CloseSuccess} className="sigIn-btn mb-0" variant='success'
                                            >
                                                موافق
                                            </Button>

                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default Index
