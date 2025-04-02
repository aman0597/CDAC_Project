import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PageWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f8f8f8;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ImageWrapper = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

const Image = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
`;

const AccordionWrapper = styled.div`
    .accordion {
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 0.25rem;
        margin: 1rem 0;
    }

    .accordion-button {
        background-color: #fff;
        border: none;
        padding: 1rem;
        font-size: 1.2rem;
        text-align: left;
        width: 100%;
        position: relative;
    }

    .accordion-button::after {
        content: '\u002B'; 
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.5rem;
    }

    .accordion-button[aria-expanded='true']::after {
        content: '\u2212';
    }

    .accordion-body {
        background-color: #fff;
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 0 0 0.25rem 0.25rem;
    }
`;

const InfoWrapper = styled.div`
    background-color: #fff;
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: left;

    h2 {
        margin-bottom: 1rem;
    }

    ul {
        list-style-type: disc;
        margin-left: 2rem;
    }

    li {
        margin-bottom: 0.5rem;
    }

    .view-more-button {
        display: inline-block;
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 0.25rem;
        font-size: 1rem;
        cursor: pointer;
        text-decoration: none;
    }

    .view-more-button:hover {
        background-color: #0056b3;
    }
`;

const ContactWrapper = styled.div`
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    max-width: 600px;
    margin: 2rem auto;

    h2 {
        margin-bottom: 1.5rem;
        font-size: 1.8rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        label {
            font-size: 1rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }

        input, textarea {
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 0.25rem;
            font-size: 1rem;
            transition: border-color 0.3s ease;
            width: 100%;
        }

        input:focus, textarea:focus {
            border-color: #007bff;
            outline: none;
        }

        .error-message {
            color: #dc3545;
            font-size: 0.875rem;
            margin-top: -0.5rem;
            margin-bottom: 0.75rem;
        }

        button {
            padding: 0.75rem 1.5rem;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 0.25rem;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s ease;
            align-self: flex-start;
        }

        button:hover {
            background-color: #0056b3;
        }
    }
`;

const Accordion = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formErrors, setFormErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};

        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        else if (!validateEmail(formData.email)) errors.email = 'Invalid email format';
        if (!formData.message) errors.message = 'Message is required';
        else if (formData.message.length < 10) errors.message = 'Message should be at least 10 characters long';

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setSuccessMessage('Your form has been submitted');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleViewMoreClick = () => {
        navigate('/features');
    };

    return (
        <PageWrapper>
            <ImageWrapper>
                <Image src="path/to/your/image.jpg" alt="Description" />
            </ImageWrapper>
            <AccordionWrapper>
                <div className="accordion">
                    <div className="accordion-button" aria-expanded="false">Accordion Header</div>
                    <div className="accordion-body">
                        <p>Accordion Content</p>
                    </div>
                </div>
            </AccordionWrapper>
            <InfoWrapper>
                <h2>Information</h2>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
                <button className="view-more-button" onClick={handleViewMoreClick}>View More</button>
            </InfoWrapper>
            <ContactWrapper>
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    {successMessage && <div className="success-message">{successMessage}</div>}
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={formErrors.name ? 'error' : ''}
                    />
                    {formErrors.name && <div className="error-message">{formErrors.name}</div>}
                    
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={formErrors.email ? 'error' : ''}
                    />
                    {formErrors.email && <div className="error-message">{formErrors.email}</div>}
                    
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={formErrors.message ? 'error' : ''}
                    />
                    {formErrors.message && <div className="error-message">{formErrors.message}</div>}
                    
                    <button type="submit">Submit</button>
                </form>
            </ContactWrapper>
        </PageWrapper>
    );
};

export default Accordion;
