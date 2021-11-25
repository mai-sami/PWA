import { Button, Form, Modal } from 'react-bootstrap'
import "./style.css";
import { useState } from 'react'
import { FormGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import succse from '../../assets/image/succse.png'


 
export default function Popup({ handleClose, show }) {
    const [passwordToggle, setPasswordToggle] = useState('true');

    const [fields, setFields] = useState({
        surePassword: "",
        password: "",
    });
    const [errors, setErrors] = useState(
        {
            surePassword: "",
            password: "",
        });
    const validate = (name, value) => {
        if (!value) {
            return "  كلمة المرور غير متطابقة "
        }
        // return "    كلمة المرور متطابقة    "

    };
    const handleUserInput = e => {
        setErrors({ ...errors, [e.target.name]: validate(e.target.name, e.target.value) });
        setFields({ ...fields, [e.target.name]: e.target.value })
    };
    const handleCloses = () => setShows(false);
     
    const [shows, setShows] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleShow = () =>{
         setShows(true);}

    const togglePass = () => {
        setPasswordToggle(!passwordToggle);
    };
    const handleClose1 = () => setShow1(false);


    const [show1, setShow1] = useState(false);
    const handleShows = () =>{
    setShows(false)
        setShow1(true);
    }

    const handleSuccess = () =>{
             setShow1(false);
             setSuccess(true)
        }

        const CloseSuccess = () =>{
             setSuccess(false)
       }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title  >هل نسيت كلمة المرور؟</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>  ادخل رقم جوالك لاستعادة كلمة المرور</p>
                    <input placeholder='     رقم جوال ' id='custom-input' />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleShow} className="subscribetion">استرجاع كلمة</Button>
                </Modal.Footer>
            </Modal>



            <Modal
                show={shows}
                onHide={handleCloses}
                backdrop="static"
                keyboard={false}
                centered
                id="mod"
            >
                <Modal.Header closeButton>
                    <p id="code">      أدخل كود التفعيل المرسل إلى جوالك</p>

                </Modal.Header>
                <Modal.Body>
                    <input placeholder='     كود التفعيل   ' className='custom-input' />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleShows} className="subscribetion">  تأكيد</Button>
                </Modal.Footer>
            </Modal>


            <Modal
                show={show1}
                onHide={handleClose1}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <p id="code">    أدخل كلمة المرور الجديدة   </p>

                </Modal.Header>
                <Modal.Body>
<div className="form__c">      

              <FormGroup className="mb- form-groupss"    id="form-group" controlId="formBasicPassword">
                        <Form.Control type={passwordToggle ? "password" : "text"}
                            className={errors.password ? "error-input" : "custom-input"}
                            placeholder="كلمة المرور الجديدة"
                          
                            name="password" value={fields.password}
                            onChange={e => handleUserInput(e)}

                        />
                        <br />
                        <Form.Control type={passwordToggle ? "password" : "text"}
                            className={errors.password ? "error-input" : "custom-input"}
                            placeholder="تأكيد كلمة المرور"
                            name="password" value={fields.password}
                            id="form-group"

                            onChange={e => handleUserInput(e)}

                        />

                        {fields && fields.password.length !== 0 ?

                            passwordToggle ?
                                <FontAwesomeIcon
                                    key="3"
                                    onClick={togglePass}
                                    icon={faEyeSlash}
                                />
                                :
                                <FontAwesomeIcon
                                    key="3"
                                    onClick={togglePass}
                                    icon={faEye}
                                />


                            : null}
                    </FormGroup>
                    </div>    


                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSuccess} className="subscribetion">تأكيد  </Button>
                </Modal.Footer>
            </Modal>






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
                <Modal.Body id="body__sucse">
 <img src={succse} alt="" />
                
                </Modal.Body>
                <Modal.Footer>
<h1 id="yes">تم تأكيد طلبك بنجاح</h1>       
         </Modal.Footer>
            </Modal>





        </>
    );
}
