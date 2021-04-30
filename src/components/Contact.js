import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('')
  const { handleSubmit } = useForm()

  const serviceID = 'service_9o7s5hl'
  const templateID = 'template_agsnwg8'
  const userID = 'user_pWtr09fG8kijUMMZeg5xV'

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    )
    r.target.reset()
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully! I'll contact you ASAP.")
      })
      .catch((err) => console.error(`Something went wrong ${err}`))
  }

  return (
    <div className='contacts'>
      <div className='text-center'>
        <h1>contact me</h1>
        <p>Please fill out the form</p>
        <span className='success-message'>{successMessage}</span>
      </div>
      <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              {/* NAME INPUT */}
              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  name='name'
                />
                <div className='line'></div>
              </div>

              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Phone Number'
                  name='phone'
                />
                <div className='line'></div>
              </div>

              <div className='text-center'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  name='email'
                />
                <div className='line'></div>
              </div>

              <div className='text-center'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Subject'
                  name='subject'
                />
                <div className='line'></div>
              </div>
            </div>
            <div className='col-md-6 col-xs-12'>
              <div className='text-center'>
                <textarea
                  type='text'
                  className='form-control'
                  placeholder='Please describe shortly you project...'
                  name='description'
                ></textarea>
                <div className='line'></div>
              </div>

              <button className='btn-main-offer contact-btn' type='submit'>
                contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
