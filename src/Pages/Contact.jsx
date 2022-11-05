import React, {useRef, useState} from 'react'
import './Contact.css'
import Footer from '../component/Footer'

const isEmpty = (value) => value.trim() === ''
const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
const isEmail = (value) => regExp.test(value)

const Contact = () => {
  // const [checked, setChecked] = useState(false)

  const [formInputsValidity, setFormInputsValidity] = useState({
    firstname: true,
    lastname: true,
    email: true,
    message: true,
    
  })


  const firstNameInput = useRef()
  const lastNameInput = useRef()
  const emailInput = useRef()
  const messageInput = useRef()
  

  const formHandler = (event) => {
    event.preventDefault();
    

    const enteredFirstName = firstNameInput.current.value;
    const enteredLastName = lastNameInput.current.value;
    const enteredEmail = emailInput.current.value;
    const enteredMessage = messageInput.current.value
    

    const enteredFirstNameIsValid = !isEmpty(enteredFirstName)
    const enteredLastNameIsValid = !isEmpty(enteredLastName)
    const enteredEmailIsValid = isEmail(enteredEmail)
    const enteredMessageIsValid = !isEmpty(enteredMessage)
    
 
    setFormInputsValidity({
      firstname: enteredFirstNameIsValid,
      lastname: enteredLastNameIsValid,
      email: enteredEmailIsValid,
      message: enteredMessageIsValid,
      
    })

    const formIsValid = enteredFirstNameIsValid && enteredLastNameIsValid
                      && enteredEmailIsValid && enteredMessageIsValid 
    
    if(!formIsValid){
      return;
    }

    firstNameInput.current.value = ''
    lastNameInput.current.value = ''
    emailInput.current.value = ''
    messageInput.current.value = ''
    
  }

  
  return (
    <div>
      <div className="main_container">
        <div className="container">
          <div className="sub_container">
            <div className="heading_container">
              <h1>Contact Me</h1>
              <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <div className="form__wrapper">
              <form onSubmit={formHandler} >
              <div className="form_fields">
                  <div className="name_container">
                    <div className="firstname_div">
                      <div className={`input_div ${formInputsValidity.firstname ? '': 'invalid'}`}>
                        <label htmlFor='firstname'>First name</label>
                        <input id="first_name" type="text" ref={firstNameInput} placeholder="Enter your first name" />
                        {!formInputsValidity.firstname && <p className='error'>Please enter your first name</p>}
                      </div>
                      </div>
                      <div className="name_div">
                      <div className={`input_div ${formInputsValidity.lastname ? '': 'invalid'}`}>
                        <label htmlFor='lastname'>Last name</label>
                        <input id="last_name" type="text" ref={lastNameInput} placeholder="Enter your last name" />
                        {!formInputsValidity.lastname && <p className='error'>Please enter your last name</p>}
                      </div>
                      </div> 
                </div>
                
                <div className="email__container child">
                  <div className={`input_div ${formInputsValidity.email ? '': 'invalid'}`}>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id="email" ref={emailInput} placeholder="yourname@email.com" />
                    {!formInputsValidity.email && <p className='error'>Please enter your email address</p>}
                  </div>
                </div>
                <div className="message__container child">
                  <div className={`input_div ${formInputsValidity.message ? '': 'invalid'}`}>
                    <label htmlFor='message'>Message</label>
                    <textarea type="text" id="message" ref={messageInput} rows={4} placeholder="Send me a message and I'll reply you as soon as possible..." />
                    {!formInputsValidity.message && <p className='error'>Please enter a message</p>}
                  </div>
                </div>
                <div className="checkbox__container child">
                  <input className="input_checkbox" type="checkbox"/>
                    {/* // onChange={e => setChecked(e.target.checked)}/> */}
                  <span className="policy">You agree to providing your data to Pretomia who may contact you.</span>
                  
                </div>
                </div>
                <button className="btn" id="btn__submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    
      
      {/* footer */}
      <Footer />
    </div>
  )
}

export default Contact

