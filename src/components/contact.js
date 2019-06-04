import React, { useState } from 'react';
import Input from './input';
import Button from './button';
import encode from '../utils/encode';
import styles from '../styles/contact.module.scss'

export const Contact = ({setShowContact}) => {
  const [formState, setFormState] = useState({});

  const handleChange = (e) => {
    e.persist()
    setFormState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    e.preventDefault()
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": 'contact',
        ...formState
      })
    })
      .then(() => {
        setShowContact(false)
      })
      .catch(error => alert(error));
  };

  const inputs = [
    {
      labelText: 'Don’t fill this out:',
      type: 'hidden',
      name: 'bot-field',
      hidden: true
    },
    {
      labelText: 'Name:',
      type: 'text',
      name: 'name'
    },
    {
      labelText: 'Email:',
      type: 'email',
      name: 'email'
    },
    {
      labelText: 'Message:',
      type: 'textarea',
      name: 'message'
    }
  ]

  return (
    <div className={styles.contact}>
      <h3>Contact</h3>
      <form
        name="contact"
        method="post"
        // action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        {inputs.map((input, i) => (
          <Input {...input} onChange={handleChange} key={`contact-form-input-${i}`}/>
        ))}
        <p>
          <Button type="submit">Contact Me</Button>
        </p>
      </form>
    </div>
  )

}

export default Contact;
