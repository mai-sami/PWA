import React from 'react'
import { Form, FormGroup, Button, Container ,Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import introImg from '../../assets/image/introImg.jpg';
import msg from '../../assets/image/messenger.png'
import "./style.css";
import { useState } from 'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import succse from '../../assets/image/succse.png'

function SignUp() {
    const [success, setSuccess] = useState(false);

    const [show1, setShow1] = useState(false);
    const [shows,setShows] =useState(false)
    const handleShows = () =>{
        setShows(true)
          
    }
    const handleCloses=()=>{
        setShows(false)

    }
    const handleOpen = () =>{
        setShows(false)

        setShow1(true);
    }

    // const handleSubmit = (e) => {
	// 	e.preventDefault();
    // }
    const handleClose1 = () => setShow1(false);

    const handleSuccess = () =>{
        setShow1(false);
        setSuccess(true)
   }

   const CloseSuccess = () =>{
        setSuccess(false)
  }
  const togglePass = () => {
    setPasswordToggle(!passwordToggle);
};
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
    return (
        <Container>
            <div className='row mt-4'>
                <div className='col-md-6 signInForm'>
                    <h3 className="headerText mb-4">إنشاء حساب جديد  </h3>
                    < div className="mainForm"    >
                        <br />
                    <p className="register__P">أدخل رقم الجوال وسيتم ارسال كود التفعيل إلى حسابك</p>

                       
                        <FormGroup className="mb- register" controlId="formBasicPassword">
                            <Form.Control id='register'
                                placeholder="  رقم الجوال"
                            />
                        </FormGroup>
                        <Form.Group className='checkbox' id="flex__check" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox"  label="من خلال إنشاء حسابك، يعني أنك توافق على" />
                            <span  id="span">    سياسة الخصوصية  </span>

                        </Form.Group>
                        <Button type="submit" onClick={handleShows} className="sigIn-btn mb-0" variant='success'
                        >
                            ارسال كود التفعيل
                        </Button>

                        <p id="Pp" className='mt-2 footerss '>   هل تمتلك حساب ؟  قم بتسجيل الدخول الان<Link to="/signIn" className="create-acc">  تسجيل دخول  </Link></p>

                       
                    </div>
                    <br />
                 
                        <br />
                </div>

                <div className='col-md-6  sideImg '>
                    <img src={introImg} alt='sideImg' className='w-100' />
                </div>
               
            </div>


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
                <Form.Control  placeholder='     كود التفعيل   ' className='custom-input' />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleOpen} className="subscribetion">  تأكيد</Button>
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
                    <p id="code">    أدخل كلمة المرور     </p>

                </Modal.Header>
                <Modal.Body>
<div className="form__c">      

              <FormGroup className="mb- form-groupss"    id="form-group" controlId="formBasicPassword">
                        <Form.Control type={passwordToggle ? "password" : "text"}
                            className={errors.password ? "error-input" : "custom-input"}
                            placeholder="كلمة المرور  "
                          
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
                       

        </Container>
    )
}

export default SignUp
