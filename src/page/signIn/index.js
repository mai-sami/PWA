import {useState} from 'react'
import {Form, FormGroup, Button ,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye , faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import msg from '../../assets/image/messenger.png'

import introImg from '../../assets/image/introImg.jpg';
import Popup from "./Modal";

import "./style.css";

export default function SignIn() {
	const [fields, setFields] = useState( {
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState(
		{
		email: "",
		password: "",
		});
		const [passwordToggle, setPasswordToggle] = useState('true');
		const [show, setShow] = useState(false);
		const handleClose = () => setShow(false);
	const handleShow = () => setShow(true); 

	const validate = (name, value) =>{
		if(!value){
			return "البيانات الذي أدختلها خاطئة"
		}
	};

	const handleUserInput = e => {
		setErrors({...errors,[e.target.name]:validate(e.target.name, e.target.value)});
		setFields({ ...fields,[e.target.name]: e.target.value})
	};

	const togglePass = () =>{
		setPasswordToggle(!passwordToggle);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let validationErrors = {};
		Object.keys(fields).forEach(name => {
			const error = validate(name, fields[name]);
			if (error && error.length > 0) {
				validationErrors[name] = error;
			}
		});
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors)
			return;
		}
		if ( fields.email && fields.password) {
			const data = {
				email: fields.email,
				password: fields.password,
			};
			window.alert("subit success", JSON.stringify(data));
		}
		};


	return (
		<Container> 
		<div className='row mt-4'>
			<div className='col-md-6 signInForm'>
			<h3 className="headerText mb-5">تسجيل الدخول</h3>
				<Form className="mainForm" onSubmit={handleSubmit}>
					<FormGroup className="custom-form-group mb-4">
						<Form.Control type="text"
						              className={errors.email? "error-input":"custom-input"}
						              placeholder="رقم الجوال أو الإيميل"
						              name="email" value={fields.email}
						              onChange={e => handleUserInput(e)}
						/>

					</FormGroup>
					<FormGroup  className="mb-" controlId="formBasicPassword">
						<Form.Control  type={passwordToggle ? "password" : "text"}
						               className={errors.password? "error-input":"custom-input"}
						               placeholder="كلمة المرور"
						               name="password" value={fields.password}
						               onChange={e => handleUserInput(e)}

						/>

						{fields && fields.password.length !== 0 ?

								  passwordToggle?
									     <FontAwesomeIcon
											key="3"
											onClick={togglePass}
											icon={ faEyeSlash }
									     />
									     :
									     <FontAwesomeIcon
										     key="3"
										     onClick={togglePass}
										     icon={faEye}
									     />


							: null}
					</FormGroup>
					{!errors.password | !errors.email ? null :
						<div className='m-auto w-50 '>
						<span className="text-danger text-center ">{errors.password ||errors.email}</span>
					</div>}
					<Form.Group  className='checkbox' controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="تذكرني" />
						<p className="checkbox__p" onClick={handleShow}>هل نسيت كلمة المرور؟</p>
						<Popup  handleClose={handleClose} show={show}/>

					</Form.Group>
						<Button type="submit" className="sigIn-btn mb-0" variant='success'
						        // disabled={field && password? false : "disabled"}
						        >
							تسجيل دخول
						</Button>
				
						<p className='mt-2 par-create-acc'>لا تمتلك حساب ؟ <Link to="/signUp" className="create-acc">أنشئ حساب جديد</Link></p>
			
						<div className='support__same'>
					<img src={msg} alt='msg'/>
				</div>
				</Form>

				 
 			 
				
			</div>
 
				
			<div className='col-md-6  sideImg '>
				<img src={introImg} alt='sideImg' className='w-100'/>
			</div>
		</div>
		</Container>
	);
}

