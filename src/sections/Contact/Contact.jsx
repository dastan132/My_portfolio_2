import styles from './ContactStyles.module.css'
import emailjs from 'emailjs-com'
import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [emailStatus, setEmailStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }

    emailjs
      .send(
        'service_cs549wa',
        'template_40rfyyz',
        templateParams,
        'EzZ5LPVa1eRdCe2u6'
      )
      .then(
        (result) => {
          console.log(result.text)
          setEmailStatus('success')
        },
        (error) => {
          console.log(error.text)
          setEmailStatus('error')
        }
      )
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <section id='contact' className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label htmlFor='name' hidden>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='email' hidden>
            Email
          </label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='message' hidden>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            placeholder='Message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <input className='hover btn' type='submit' value='Submit' />
      </form>
      <br />
      {emailStatus === 'success' && (
        <div className='success-message'>
          <p>Email sent successfully!</p>
        </div>
      )}
      {emailStatus === 'error' && (
        <div className='error-message'>
          <p>There was an error sending your email. Please try again later.</p>
        </div>
      )}
    </section>
  )
}

export default Contact
