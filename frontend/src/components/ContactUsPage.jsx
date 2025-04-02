import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const Wrapper = styled.div`
  margin-top: 4rem; /* Adjust the top margin as needed */
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #1c1c1c; /* Dark background for the form */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #333;
  background-color: #2a2a2a; /* Slightly lighter background for input */
  color: #f0f0f0; /* Off-white text color */
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #333;
  background-color: #2a2a2a; /* Slightly lighter background for textarea */
  color: #f0f0f0; /* Off-white text color */
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.8rem;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const StatusMessage = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #f0f0f0;
  text-align: center;
`;

const ContactUsPage = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3zxn53e', 'template_c90kkbz', e.target, '58E6FAXHfUS9ilQp2')
      .then((result) => {
        console.log(result.text);
        setStatus('Thank you for your message! We will get back to you soon.');
      }, (error) => {
        console.log(error.text);
        setStatus('Oops! There was a problem sending your message.');
      });
  };

  return (
    <Wrapper>
      <ContactForm onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <Textarea name="message" rows="5" placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
        {status && <StatusMessage>{status}</StatusMessage>}
      </ContactForm>
    </Wrapper>
  );
};

export default ContactUsPage;
